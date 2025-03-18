export default class Enemy {
    constructor(size, hp, element, imagePath) {
        this.size = size;
        this.hp = hp;
        this.elemnt = element;
        this.imagePath = imagePath;
    }
}

export const Elements = Object.freeze({
    FIRE: 'fire',
    ICE: 'ice',
    PLANT: 'plant'
});