[cep-game](../README.md) / [Exports](../modules.md) / ModuleCard

# Class: ModuleCard

ModuleCard Component

**`exports`**

## Hierarchy

- `LitElement`

  ↳ **`ModuleCard`**

## Table of contents

### Constructors

- [constructor](ModuleCard.md#constructor)

### Properties

- [cardColor](ModuleCard.md#cardcolor)
- [cardDescription](ModuleCard.md#carddescription)
- [cardImageName](ModuleCard.md#cardimagename)
- [cardLink](ModuleCard.md#cardlink)
- [cardPosition](ModuleCard.md#cardposition)
- [cardTitle](ModuleCard.md#cardtitle)
- [styles](ModuleCard.md#styles)

### Methods

- [getChapter](ModuleCard.md#getchapter)
- [render](ModuleCard.md#render)

## Constructors

### constructor

• **new ModuleCard**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### cardColor

• **cardColor**: `string` = `''`

**`property`** {number} - Color of the Card

#### Defined in

[src/components/module-card/module-card.ts:41](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L41)

___

### cardDescription

• **cardDescription**: `string` = `''`

**`property`** {string} - Description of the Card

#### Defined in

[src/components/module-card/module-card.ts:29](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L29)

___

### cardImageName

• **cardImageName**: `string` = `''`

**`property`** {number} - Link of Card Image

#### Defined in

[src/components/module-card/module-card.ts:53](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L53)

___

### cardLink

• **cardLink**: `string` = `''`

**`property`** {number} - Link to the Page

#### Defined in

[src/components/module-card/module-card.ts:47](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L47)

___

### cardPosition

• **cardPosition**: `number` = `0`

**`property`** {number} - Position of the Card

#### Defined in

[src/components/module-card/module-card.ts:35](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L35)

___

### cardTitle

• **cardTitle**: `string` = `''`

**`property`** {string} - Title of the Card

#### Defined in

[src/components/module-card/module-card.ts:23](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L23)

___

### styles

▪ `Static` **styles**: `CSSResult`

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/module-card/module-card.ts:17](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L17)

## Methods

### getChapter

▸ `Private` **getChapter**(`e`): `void`

Get next Chapter and Redirect to next Chapter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | Information about the Element |

#### Returns

`void`

-

#### Defined in

[src/components/module-card/module-card.ts:61](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L61)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/module-card/module-card.ts:72](https://github.com/CEP-Gruppe-2/cep-game/blob/ed86311/src/components/module-card/module-card.ts#L72)
