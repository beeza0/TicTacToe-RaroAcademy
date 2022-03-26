const intersection = (array1: Array<number>, array2: Array<number>) : Array<number> => {
    return array1.filter((item: number) => array2.includes(item))
}

export default intersection