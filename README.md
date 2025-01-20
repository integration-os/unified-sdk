# @picahq/unified

The Pica Unified SDK library for Node.js provides convenient access to the Pica Unified API from applications written in server-side JavaScript.

## Install

Using npm:

```jsx
npm i @picahq/unified
```

Using yarn:

```jsx
yarn add @picahq/unified
```

## Configuration

To use the library you must provide an API key and Connection key. Both are located in the Pica dashboard.

```jsx
import { Pica } from "@picahq/unified";

const pica = new Pica("sk_live_1234");

const response = await pica
  .customers("live::xero::acme-inc")
  .get("cus_OT3CLnirqcpjvw");

console.log(response);
```

## Testing

Configure the `.env` file based on the `.env.sample` provided with an Pica Secret Key, Connection Key and Model to test.

## Full Documentation

Please refer to the official Pica [Documentation](https://docs.picaos.com) and [API Reference](https://docs.picaos.com/api-reference/introduction) for more information and Node.js usage examples.
