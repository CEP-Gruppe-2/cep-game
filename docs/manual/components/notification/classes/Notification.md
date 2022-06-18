[cep-game](../README.md) / [Exports](../modules.md) / Notification

# Class: Notification

Notification Component

**`exports`**

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

[src/components/notification/notification.ts:19](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L19)

___

### timeout

• **timeout**: `number` = `1000`

**`property`** Notification timeout or Notification closing

#### Defined in

[src/components/notification/notification.ts:22](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L22)

___

### styles

▪ `Static` **styles**: `CSSResult`

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/notification/notification.ts:16](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L16)

## Methods

### \_closeNotification

▸ `Private` **_closeNotification**(): `void`

Close Notification and create new Event

#### Returns

`void`

#### Defined in

[src/components/notification/notification.ts:30](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L30)

___

### \_typeOfNotification

▸ **_typeOfNotification**(): `any`

Get Type of the Notification - error or success and return HTML

#### Returns

`any`

#### Defined in

[src/components/notification/notification.ts:39](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L39)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/notification/notification.ts:70](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/notification/notification.ts#L70)
