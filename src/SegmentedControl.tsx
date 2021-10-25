import React, { useEffect, useState } from 'react';
import './index.css';
import styles from './index.css';
export interface SegmentControlProps {
  /**the segments of the segmented control */
  segments: Array<{
    /**label of the current segment, displayed in the component */

    label: string;
    /**disabled (optional) property of the segment, set to true to disable the segment */

    disabled?: boolean;
    /**the actual value of the segment, must be unique */

    value: string;
    /**set default (optional) property to true in order to set the current segment as the default selected segment */
    default?: boolean;
  }>;

  /**onChangeSegment is a callback, dispatched when the selected segment changes. will return the value of the new segment*/
  onChangeSegment: (segmentValue: string) => void;
}

/**if no default property is set, the default selected segment is automatically the first encountered  */
export const SegmentedControl: React.VFC<SegmentControlProps> = ({
  segments,
  onChangeSegment,
  ...props
}) => {
  useEffect(() => {
    const uniqueKeys = new Set(segments.map(({ value }) => value));
    if (uniqueKeys.size !== segments.length) {
      throw new Error('Segments must have unique values');
    }
  }, [segments]);

  const [selectedSegment, setSelectedSegment] = useState<string>(
    segments.find((s) => s.default)?.value ?? segments[0].value
  );

  const onChange = (selectedSegment: string) => {
    setSelectedSegment(selectedSegment);
    onChangeSegment(selectedSegment);
  };

  const renderSegments = () =>
    segments.map((segment) => {
      if (segment.value === selectedSegment) {
        return (
          <li key={segment.value} className={`${styles['selected']} selected`}>
            {segment?.label ?? ''}
          </li>
        );
      }
      if (segment.disabled) {
        return (
          <li key={segment.value} className={`${styles['disabled']} disabled`}>
            {segment?.label ?? ''}
          </li>
        );
      }
      return (
        <li key={segment.value} onClick={() => onChange(segment.value)}>
          {segment.label}
        </li>
      );
    });

  return (
    <div
      className={`${styles['segmented-control-container']} segmented-control-container`}
      {...props}
    >
      <ul>{renderSegments()}</ul>
    </div>
  );
};
