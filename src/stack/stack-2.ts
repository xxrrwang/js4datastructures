/*
 * @Descripttion: 基于Object的栈实现
 * @version: 
 * @Author: wangxr
 * @Date: 2024-04-14 22:48:42
 * @LastEditors: wangxr
 * @LastEditTime: 2024-04-14 23:10:38
 */
class Stack2 {
    
    objectBasedStack: Object = {};
    count: number = 0;

    constructor() {
        this.objectBasedStack = {};
        this.count = 0;
    }

    /**
     * 进栈
     * @param element 
     */
    push(element: any) {
        this.objectBasedStack[this.count] = element;
        this.count++;
    }

    /**
     * 出栈
     * @returns element
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const res =  this.objectBasedStack[this.count];
        delete this.objectBasedStack[this.count];
        return res;
    }

    /**
     * 查看栈顶元素
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.objectBasedStack[this.count - 1];
    }

    /**
     * 获取栈的长度
     */
    size() {
        return this.count;
    }

    /**
     * 检查是否为空
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * 清空
     */
    clear() {
        this.objectBasedStack = {};
        this.count = 0;
    }

    /**
     * 查看栈
     */
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.objectBasedStack[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.objectBasedStack[i]}`;
        }
        return objString;
    }
}