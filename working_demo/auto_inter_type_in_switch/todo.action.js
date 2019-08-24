"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Add {
    constructor(payload) {
        this.payload = payload;
        // readonly type: string = 'Add'; // type의 타입 = string
        this.type = 'Add'; // type의 타입은 'Add'
    }
}
exports.Add = Add;
class RemoveAll {
    constructor() {
        this.type = 'Remove All';
    }
}
exports.RemoveAll = RemoveAll;
class RemoveOne {
    constructor(payload) {
        this.payload = payload;
        this.type = 'Remove One';
    }
}
exports.RemoveOne = RemoveOne;
