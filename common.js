function range(start, stop, step = 1) {
    if (stop === undefined) { // 一个参数
        stop = start;
        start = 0;
    }
    const ret = [];

    while (step > 0 ? start < stop : start > stop) {
        ret.push(start);
        start += step;
    }
    return ret;
}

class CString {
    static isEn = (c) => {
        return /[\u0000-\u00ff]/.test(c);
    }
    static isZh = (c) => {
        return !CString.isEn(c);
    }
    constructor(str) {
        this.value = str;
        this.indexs = [];
        for (let i = 0; i < str.length; i++) {
            this.indexs.push(i);
            if (CString.isZh(str.charAt(i))) {
                this.indexs.push(i);
            }
        }
        this.length = this.indexs.length;
    }
    slice(from, to) {
        const cfrom = from >= this.length ? this.length : this.indexs[from];
        const cto = to >= this.length ? this.length : this.indexs[to];
        return this.value.slice(cfrom, cto);
    }
    toLines(enWordCount, lineCount = 1) {
        const lines = [];
        if (lineCount > 0) {
            while (lineCount > lines.length) {
                lines.push(this.slice(lines.length * enWordCount, (lines.length + 1) * enWordCount));
            }
            if (this.length > lineCount * enWordCount) {
                lines[lineCount - 1] += '..';
            }
        }
        return lines;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
}