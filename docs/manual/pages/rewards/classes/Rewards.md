[cep-game](../README.md) / [Exports](../modules.md) / Rewards

# Class: Rewards

## Hierarchy

- `LitElement`

  ↳ **`Rewards`**

## Table of contents

### Constructors

- [constructor](Rewards.md#constructor)

### Properties

- [punkte](Rewards.md#punkte)
- [styles](Rewards.md#styles)

### Methods

- [city](Rewards.md#city)
- [downloadCollage](Rewards.md#downloadcollage)
- [exchangePoints](Rewards.md#exchangepoints)
- [render](Rewards.md#render)

## Constructors

### constructor

• **new Rewards**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### punkte

• `Private` **punkte**: `number`

**`property`** {number} - Totalpoints

#### Defined in

[src/pages/rewards/rewards.ts:23](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L23)

___

### styles

▪ `Static` **styles**: `CSSResult`

**`cssprops`**

#### Overrides

LitElement.styles

#### Defined in

[src/pages/rewards/rewards.ts:17](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L17)

## Methods

### city

▸ `Private` **city**(): `any`

Return Img City, when points Exchanged is city light or dark

#### Returns

`any`

- return img of the city

#### Defined in

[src/pages/rewards/rewards.ts:31](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L31)

___

### downloadCollage

▸ `Private` **downloadCollage**(): `any`

Return download Button for photo collage

#### Returns

`any`

#### Defined in

[src/pages/rewards/rewards.ts:76](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L76)

___

### exchangePoints

▸ `Private` **exchangePoints**(): `Promise`<`void`\>

Exchange points and set last Exchange

**`async`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/pages/rewards/rewards.ts:57](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L57)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/pages/rewards/rewards.ts:96](https://github.com/CEP-Gruppe-2/cep-game/blob/e7983ab/src/pages/rewards/rewards.ts#L96)
