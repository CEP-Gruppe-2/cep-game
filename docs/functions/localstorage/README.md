[cep-game](README.md) / Exports

# cep-game

## Table of contents

### Functions

- [addPointsArrayToLocalStorage](modules.md#addpointsarraytolocalstorage)
- [addPointsToLocalStorage](modules.md#addpointstolocalstorage)
- [changePointsLocalStorage](modules.md#changepointslocalstorage)
- [exchangePointsAndSetLastNextExchang](modules.md#exchangepointsandsetlastnextexchang)
- [getAllLocalStorage](modules.md#getalllocalstorage)
- [getArrayWithGainedPoints](modules.md#getarraywithgainedpoints)
- [getItemJsonLocalStorage](modules.md#getitemjsonlocalstorage)
- [getItemLocalStorage](modules.md#getitemlocalstorage)
- [getLastTimeExchangeDays](modules.md#getlasttimeexchangedays)
- [getLastTimeExchangeHours](modules.md#getlasttimeexchangehours)
- [getLastTimeExchangeMinutes](modules.md#getlasttimeexchangeminutes)
- [isLastExchangePermitted](modules.md#islastexchangepermitted)
- [isLastExchangePermittedDebug](modules.md#islastexchangepermitteddebug)
- [itemExistInLocalstorage](modules.md#itemexistinlocalstorage)
- [removeAllPointsFromLocalStorage](modules.md#removeallpointsfromlocalstorage)
- [returnTotalPoints](modules.md#returntotalpoints)
- [setItemJsonLocalStorage](modules.md#setitemjsonlocalstorage)
- [setItemLocalStorage](modules.md#setitemlocalstorage)

## Functions

### addPointsArrayToLocalStorage

▸ **addPointsArrayToLocalStorage**(`points`): `void`

Save Points into Localstorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `any`[] | Points that should be added to LS |

#### Returns

`void`

#### Defined in

[localstorage.ts:166](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L166)

___

### addPointsToLocalStorage

▸ **addPointsToLocalStorage**(`name`, `value`): `void`

Adds points that the Used reiceved in the Games

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Key of Localstorage |
| `value` | `string` | Value / Points that should be added to Localstorage |

#### Returns

`void`

#### Defined in

[localstorage.ts:145](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L145)

___

### changePointsLocalStorage

▸ **changePointsLocalStorage**(`points`, `value`): `void`

Overrides the old Points with the new Points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `string` | get Value for the Key Points or Key itself |
| `value` | `string` \| `number` | the points that should be added to the old points |

#### Returns

`void`

#### Defined in

[localstorage.ts:41](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L41)

___

### exchangePointsAndSetLastNextExchang

▸ **exchangePointsAndSetLastNextExchang**(`points`): `void`

Exchange Points and set new Time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `number` | Points that will be exchange |

#### Returns

`void`

#### Defined in

[localstorage.ts:199](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L199)

___

### getAllLocalStorage

▸ **getAllLocalStorage**(): `string`[]

Return String Object or Array of type string with all Keys and Values inside Localstorage

#### Returns

`string`[]

#### Defined in

[localstorage.ts:78](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L78)

___

### getArrayWithGainedPoints

▸ **getArrayWithGainedPoints**(): `string`[]

Returns Array with all Points that the use get from all the Games

#### Returns

`string`[]

#### Defined in

[localstorage.ts:96](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L96)

___

### getItemJsonLocalStorage

▸ **getItemJsonLocalStorage**(`name`): `undefined` \| `Object`

Return parsed JSON-Array from Localstorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the Name of the Key |

#### Returns

`undefined` \| `Object`

#### Defined in

[localstorage.ts:67](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L67)

___

### getItemLocalStorage

▸ **getItemLocalStorage**(`name`): `string`

Returns the Value of the Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Key of Localstorage |

#### Returns

`string`

#### Defined in

[localstorage.ts:27](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L27)

___

### getLastTimeExchangeDays

▸ **getLastTimeExchangeDays**(): `number`

Difference between last Exchange in Days

#### Returns

`number`

- returns difference between last Points exchange and now

#### Defined in

[localstorage.ts:221](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L221)

___

### getLastTimeExchangeHours

▸ **getLastTimeExchangeHours**(): `number`

Difference between last Exchange in Hours

#### Returns

`number`

- returns difference between last Points exchange and now

#### Defined in

[localstorage.ts:231](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L231)

___

### getLastTimeExchangeMinutes

▸ **getLastTimeExchangeMinutes**(): `number`

Difference between last Exchange in Minutes

#### Returns

`number`

- returns difference between last Points exchange and now

#### Defined in

[localstorage.ts:211](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L211)

___

### isLastExchangePermitted

▸ **isLastExchangePermitted**(): `Boolean`

Is the last Exchange exceeded or not

#### Returns

`Boolean`

- Last Exchange exceeded - true or false

#### Defined in

[localstorage.ts:241](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L241)

___

### isLastExchangePermittedDebug

▸ **isLastExchangePermittedDebug**(`debug`): `Boolean`

Is the last Exchange exceeded or not, with debuging option

#### Parameters

| Name | Type |
| :------ | :------ |
| `debug` | ``true`` |

#### Returns

`Boolean`

- Last Exchange exceeded - true or false

#### Defined in

[localstorage.ts:250](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L250)

___

### itemExistInLocalstorage

▸ **itemExistInLocalstorage**(`title`): `Boolean`

Return position of title or key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | Value that should be founded |

#### Returns

`Boolean`

- returns pos of the element, when founded or -1 when not founded

#### Defined in

[localstorage.ts:134](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L134)

___

### removeAllPointsFromLocalStorage

▸ **removeAllPointsFromLocalStorage**(): `void`

Clear Localstorage

#### Returns

`void`

#### Defined in

[localstorage.ts:175](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L175)

___

### returnTotalPoints

▸ **returnTotalPoints**(): `number`

Sum all the Points or substract points and return the total

#### Returns

`number`

#### Defined in

[localstorage.ts:109](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L109)

___

### setItemJsonLocalStorage

▸ **setItemJsonLocalStorage**(`name`, `value`): `void`

Set Key and Array with multiple Values into Localstorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Key of Localstorage |
| `value` | `Object` | Array with multiple Values |

#### Returns

`void`

#### Defined in

[localstorage.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L18)

___

### setItemLocalStorage

▸ **setItemLocalStorage**(`name`, `value`): `void`

Set Key and Value into Localstorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Key of Localstorage |
| `value` | `string` | Value of Localstorage |

#### Returns

`void`

#### Defined in

[localstorage.ts:7](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/localstorage.ts#L7)
