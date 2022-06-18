[cep-game](../README.md) / [Exports](../modules.md) / Notification

# Class: Notification

## Hierarchy

- `LitElement`

  ↳ **`Notification`**

## Table of contents

### Constructors

- [constructor](Notification.md#constructor)

### Properties

- [notification](Notification.md#notification)
- [timeout](Notification.md#timeout)
- [styles](Notification.md#styles)

### Methods

- [\_closeNotification](Notification.md#_closenotification)
- [\_typeOfNotification](Notification.md#_typeofnotification)
- [render](Notification.md#render)

## Constructors

### constructor

• **new Notification**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### notification

• **notification**: `string` = `''`

**`property`** {string} - Notification text

#### Defined in

[src/components/notification/notification.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L18)

___

### timeout

• **timeout**: `number` = `1000`

**`property`** Notification timeout or Notification closing

#### Defined in

[src/components/notification/notification.ts:21](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L21)

___

### styles

▪ `Static` **styles**: `CSSResult`

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/notification/notification.ts:15](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L15)

## Methods

### \_closeNotification

▸ `Private` **_closeNotification**(): `void`

Close Notification and create new Event

#### Returns

`void`

#### Defined in

[src/components/notification/notification.ts:29](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L29)

___

### \_typeOfNotification

▸ **_typeOfNotification**(): `any`

Get Type of the Notification - error or success and return HTML

#### Returns

`any`

#### Defined in

[src/components/notification/notification.ts:38](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L38)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/notification/notification.ts:69](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/notification/notification.ts#L69)
