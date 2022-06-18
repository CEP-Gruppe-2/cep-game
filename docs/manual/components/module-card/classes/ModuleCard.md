[cep-game](../README.md) / [Exports](../modules.md) / ModuleCard

# Class: ModuleCard

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

[src/components/module-card/module-card.ts:40](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L40)

___

### cardDescription

• **cardDescription**: `string` = `''`

**`property`** {string} - Description of the Card

#### Defined in

[src/components/module-card/module-card.ts:28](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L28)

___

### cardImageName

• **cardImageName**: `string` = `''`

**`property`** {number} - Link of Card Image

#### Defined in

[src/components/module-card/module-card.ts:52](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L52)

___

### cardLink

• **cardLink**: `string` = `''`

**`property`** {number} - Link to the Page

#### Defined in

[src/components/module-card/module-card.ts:46](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L46)

___

### cardPosition

• **cardPosition**: `number` = `0`

**`property`** {number} - Position of the Card

#### Defined in

[src/components/module-card/module-card.ts:34](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L34)

___

### cardTitle

• **cardTitle**: `string` = `''`

**`property`** {string} - Title of the Card

#### Defined in

[src/components/module-card/module-card.ts:22](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L22)

___

### styles

▪ `Static` **styles**: `CSSResult`

**`cssprop`**

#### Overrides

LitElement.styles

#### Defined in

[src/components/module-card/module-card.ts:16](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L16)

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

[src/components/module-card/module-card.ts:60](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L60)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/components/module-card/module-card.ts:71](https://github.com/CEP-Gruppe-2/cep-game/blob/67020bd/src/components/module-card/module-card.ts#L71)
