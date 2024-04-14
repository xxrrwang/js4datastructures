/*
 * @Descripttion: 基于Array的栈实现
 * @version: 
 * @Author: wangxr
 * @Date: 2024-04-14 22:10:32
 * @LastEditors: wangxr
 * @LastEditTime: 2024-04-14 23:10:41
 */
class Stack1 {
    
    arrayBasedStack: Array<any>;

    constructor() {
        this.arrayBasedStack = [];
    }

    /**
     * 进栈
     * @param element 
     */
    push(element: any) {
        this.arrayBasedStack.push(element);
    }

    /**
     * 出栈
     * @returns element
     */
    pop() {
        return this.arrayBasedStack.pop();
    }

    /**
     * 查看栈顶元素
     */
    peek() {
        if (this.arrayBasedStack.length) {
            return this.arrayBasedStack[this.arrayBasedStack.length - 1];
        }
    }

    /**
     * 获取栈的长度
     */
    size() {
        return this.arrayBasedStack.length;
    }

    /**
     * 检查是否为空
     */
    isEmpty() {
        return this.arrayBasedStack.length;
    }

    /**
     * 清空
     */
    clear() {
        this.arrayBasedStack = [];
    }
}