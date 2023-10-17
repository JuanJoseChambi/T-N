export function useLocalStorage () {

    function getItemFromLocalStorage (key : string) {
        const item = localStorage.getItem(key)
        if (item) {
            return item
        }
        return null
    }

    function setItemInLocalStorage (key : string, item : any) {
        localStorage.setItem(key, JSON.stringify(item))
    }



    return { getItemFromLocalStorage, setItemInLocalStorage}
}