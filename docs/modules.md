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

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `any`[] |

#### Returns

`void`

#### Defined in

[localstorage.ts:110](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L110)

___

### addPointsToLocalStorage

▸ **addPointsToLocalStorage**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[localstorage.ts:95](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L95)

___

### changePointsLocalStorage

▸ **changePointsLocalStorage**(`points`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `string` |
| `value` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[localstorage.ts:22](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L22)

___

### exchangePointsAndSetLastNextExchang

▸ **exchangePointsAndSetLastNextExchang**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number` |

#### Returns

`void`

#### Defined in

[localstorage.ts:129](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L129)

___

### getAllLocalStorage

▸ **getAllLocalStorage**(): `string`[]

#### Returns

`string`[]

#### Defined in

[localstorage.ts:48](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L48)

___

### getArrayWithGainedPoints

▸ **getArrayWithGainedPoints**(): `string`[]

#### Returns

`string`[]

#### Defined in

[localstorage.ts:62](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L62)

___

### getItemJsonLocalStorage

▸ **getItemJsonLocalStorage**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[localstorage.ts:41](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L41)

___

### getItemLocalStorage

▸ **getItemLocalStorage**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[localstorage.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L18)

___

### getLastTimeExchangeDays

▸ **getLastTimeExchangeDays**(): `number`

#### Returns

`number`

#### Defined in

[localstorage.ts:142](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L142)

___

### getLastTimeExchangeHours

▸ **getLastTimeExchangeHours**(): `number`

#### Returns

`number`

#### Defined in

[localstorage.ts:147](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L147)

___

### getLastTimeExchangeMinutes

▸ **getLastTimeExchangeMinutes**(): `number`

#### Returns

`number`

#### Defined in

[localstorage.ts:137](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L137)

___

### isLastExchangePermitted

▸ **isLastExchangePermitted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[localstorage.ts:152](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L152)

___

### isLastExchangePermittedDebug

▸ **isLastExchangePermittedDebug**(`debug`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `debug` | ``true`` |

#### Returns

`boolean`

#### Defined in

[localstorage.ts:157](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L157)

___

### itemExistInLocalstorage

▸ **itemExistInLocalstorage**(`title`): `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Boolean`

#### Defined in

[localstorage.ts:91](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L91)

___

### removeAllPointsFromLocalStorage

▸ **removeAllPointsFromLocalStorage**(): `void`

#### Returns

`void`

#### Defined in

[localstorage.ts:114](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L114)

___

### returnTotalPoints

▸ **returnTotalPoints**(): `number`

#### Returns

`number`

#### Defined in

[localstorage.ts:71](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L71)

___

### setItemJsonLocalStorage

▸ **setItemJsonLocalStorage**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `Object` |

#### Returns

`void`

#### Defined in

[localstorage.ts:14](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L14)

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

[localstorage.ts:8](https://github.com/CEP-Gruppe-2/cep-game/blob/a80ffe6/src/functions/localstorage.ts#L8)
