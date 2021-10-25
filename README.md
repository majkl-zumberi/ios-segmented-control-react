# Segmented Control React

A nice & simple iOS like segmented control React component

## Preview

see below the demo (storybook)

[link to Demo](https://ios-segmented-control-react-storybook.vercel.app)

## Installation

`npm install ios-segmented-control-react —-save`

OR

`yarn add ios-segmented-control-react`

## Usage

- ### For commonJS import syntax

  `const SegmentedControl = require('ios-segmented-control-react');`

- ### For Es2016
  `import { SegmentedControl } from 'ios-segmented-control-react';`

## Props

| Attribute       | Type  | Description                                |          |
| --------------- | ----- | ------------------------------------------ | -------- |
| segments        | array | List of segments                           | required |
| onChangeSegment | event | method to implement logic on click segment | required |

### Features

- **Disable segment** : add `disabled: true` to segment object as shown in the example below to disable that particular segment
- **enable default selected segment** : add `default: true` to segment object as shown in the example below to set the preferred segment as selected state

## Example

```
…
import { SegmentedControl } from 'ios-segmented-control-react';

const App = ()=> {
    return (
      <div className="App">
        <SegmentedControl
            segments= [
              { label: 'Single', value: 'sigle' },
              { label: 'Recursive', value: 'recursive', default:true },
              { label: 'Disabled', value: 'disabled', disabled: true },
            ]
            onChangeSegment={(newValue)=>console.log(newValue)}
        />
      </div>
    );
}
…
```
