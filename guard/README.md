# Guard

## Examples:

```js
const guard = new Guard();

guard
  .against(new AgainstEmptyString('will not throw error on this'))
  .against(
    new AgainstStringLength({
      text: 'will not throw error on this',
      maxLength: 30,
      minLength: 1,
    }),
  )
  .against(new AgainstEmptyString('')); // Will throw error on this

console.log('done successfully without errors');
```
