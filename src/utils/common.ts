export function IsEmptyArrayCheck(array : any) {
    if (IsArray(array)) {
        if (array.length > 0) {
            return false
        }
    }
    return true
}

export function IsArray(array : []) {
    return Array.isArray(array)
}

// 공백 및 null 체크
export function IsEmpty(data : any) {
    if (
        data === '' ||
        data === null ||
        data === undefined ||
        data === 'null' ||
        data === 'undefined'
    ) {
        return true
    } else {
        return false
    }
}

export function isEmptyObject(obj : any) {
    return obj === null || obj === undefined || Object.keys(obj).length === 0
}

export function isNotEmptyObject(obj : any) {
    return !isEmptyObject(obj)
}