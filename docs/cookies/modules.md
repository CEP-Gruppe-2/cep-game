[cep-game](README.md) / Exports

# cep-game

## Table of contents

### Functions

- [changeCookie](modules.md#changecookie)
- [cookieExist](modules.md#cookieexist)
- [deleteCookieWithPath](modules.md#deletecookiewithpath)
- [deleteCookieWithoutPath](modules.md#deletecookiewithoutpath)
- [getCookie](modules.md#getcookie)
- [setCookieIfNotExist](modules.md#setcookieifnotexist)
- [setCookieIfNotExistWithExpire](modules.md#setcookieifnotexistwithexpire)

## Functions

### changeCookie

▸ **changeCookie**(`cookie`): `void`

Change the Value of old Cookie to the new Value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookie` | `Cook` | Cook Object |

#### Returns

`void`

#### Defined in

[cookies.ts:85](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L85)

___

### cookieExist

▸ **cookieExist**(`cookieName`): `boolean`

Return true if Cookie with following Name exist or false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieName` | `string` | Name of the Cookie |

#### Returns

`boolean`

- returns true or false

#### Defined in

[cookies.ts:27](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L27)

___

### deleteCookieWithPath

▸ **deleteCookieWithPath**(`cookieName`): `void`

Delete Cookie by the Name with Url Path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieName` | `string` | Delete Cookie by the Name |

#### Returns

`void`

#### Defined in

[cookies.ts:76](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L76)

___

### deleteCookieWithoutPath

▸ **deleteCookieWithoutPath**(`cookieName`): `void`

Delete Cookie by the Name without Url Path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieName` | `string` | Delete Cookie by the Name |

#### Returns

`void`

#### Defined in

[cookies.ts:67](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L67)

___

### getCookie

▸ **getCookie**(`cookieName`): `undefined` \| `string`

Return Cookie Value by Cookie Name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieName` | `string` | Name of the Cookie |

#### Returns

`undefined` \| `string`

#### Defined in

[cookies.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L18)

___

### setCookieIfNotExist

▸ **setCookieIfNotExist**(`setCookie`, `cookieData`): `boolean`

Save Cookie if it not exist and return true if cookie should be set or false if not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setCookie` | `Boolean` | Should Cookie saved? |
| `cookieData` | `Cook` | Cookie Object of type Cook |

#### Returns

`boolean`

#### Defined in

[cookies.ts:37](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L37)

___

### setCookieIfNotExistWithExpire

▸ **setCookieIfNotExistWithExpire**(`setCookie`, `cookieData`): `void`

Save Cookie if not Exist and add Expiration time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setCookie` | `Boolean` | Should Cookie saved? |
| `cookieData` | `Cook` | Object of type Cook |

#### Returns

`void`

#### Defined in

[cookies.ts:54](https://github.com/CEP-Gruppe-2/cep-game/blob/6270a8b/src/functions/cookies.ts#L54)
