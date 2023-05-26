// function to see if an object contains a non-empty string value or not

export default function emptyObject(object: any) {
    for (let key in object) {
        if (object[key] !== "") {
            return false;
        }
    }
    return true;
}