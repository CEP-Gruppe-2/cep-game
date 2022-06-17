[cep-game](../README.md) / [Exports](../modules.md) / ModulePopup

# Class: ModulePopup

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

[src/components/module-popup/module-popup.ts:30](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L30)

___

### popupRedirect

• **popupRedirect**: `Boolean` = `false`

**`property`** {Boolean} - Redirect true or not

#### Defined in

[src/components/module-popup/module-popup.ts:21](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L21)

___

### popupText

• **popupText**: `string` = `''`

**`property`** {string} - Text for the popup

#### Defined in

[src/components/module-popup/module-popup.ts:27](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L27)

___

### popupVisible

• **popupVisible**: `boolean` = `false`

**`property`** {Boolean} - Set popup visible or not

#### Defined in

[src/components/module-popup/module-popup.ts:24](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L24)

___

### styles

▪ `Static` **styles**: `CSSResult`

Css Style

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/module-popup/module-popup.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L18)

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

[src/components/module-popup/module-popup.ts:33](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L33)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/module-popup/module-popup.ts:37](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-popup/module-popup.ts#L37)
