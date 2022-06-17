[cep-game](README.md) / Exports

# cep-game

## Table of contents

### Functions

- [redirectTo](modules.md#redirectto)
- [redirectToWithParameter](modules.md#redirecttowithparameter)

## Functions

### redirectTo

▸ **redirectTo**(`redirectUrl`, `_connectionType`): `void`

Redirect to the URL and set connection Type -> HTTP | HTTPS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirectUrl` | `String` | redirect url |
| `_connectionType` | `String` | connection type |

#### Returns

`void`

#### Defined in

[redirect.ts:7](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/redirect.ts#L7)

___

### redirectToWithParameter

▸ **redirectToWithParameter**(`redirectUrl`, `urlParameters`, `urlParameter`): `void`

Redirect to some Page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirectUrl` | `String` | url |
| `urlParameters` | `String` | url parameters (multiple) |
| `urlParameter` | `String` | url parameter (only one) |

#### Returns

`void`

#### Defined in

[redirect.ts:24](https://github.com/CEP-Gruppe-2/cep-game/blob/8accf3e/src/functions/redirect.ts#L24)
