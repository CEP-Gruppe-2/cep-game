[cep-game](../README.md) / [Exports](../modules.md) / ModulePopup

# Class: ModulePopup

ModulePopup Component

**`exports`**

## Hierarchy

- `LitElement`

  ↳ **`ModulePopup`**

## Table of contents

### Constructors

- [constructor](ModulePopup.md#constructor)

### Properties

- [popupNextPageLink](ModulePopup.md#popupnextpagelink)
- [popupRedirect](ModulePopup.md#popupredirect)
- [popupText](ModulePopup.md#popuptext)
- [popupVisible](ModulePopup.md#popupvisible)
- [styles](ModulePopup.md#styles)

### Methods

- [\_closeComponent](ModulePopup.md#_closecomponent)
- [render](ModulePopup.md#render)

## Constructors

### constructor

• **new ModulePopup**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### popupNextPageLink

• **popupNextPageLink**: `string` = `''`

**`property`** {string} - Redirect Link to another Page

#### Defined in

[src/components/module-popup/module-popup.ts:31](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L31)

___

### popupRedirect

• **popupRedirect**: `Boolean` = `false`

**`property`** {Boolean} - Redirect true or not

#### Defined in

[src/components/module-popup/module-popup.ts:22](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L22)

___

### popupText

• **popupText**: `string` = `''`

**`property`** {string} - Text for the popup

#### Defined in

[src/components/module-popup/module-popup.ts:28](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L28)

___

### popupVisible

• **popupVisible**: `boolean` = `false`

**`property`** {Boolean} - Set popup visible or not

#### Defined in

[src/components/module-popup/module-popup.ts:25](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L25)

___

### styles

▪ `Static` **styles**: `CSSResult`

Css Style

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/module-popup/module-popup.ts:19](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L19)

## Methods

### \_closeComponent

▸ **_closeComponent**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | Close Component and create dispatchEvent with event Details |

#### Returns

`void`

#### Defined in

[src/components/module-popup/module-popup.ts:34](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L34)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/module-popup/module-popup.ts:38](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-popup/module-popup.ts#L38)
