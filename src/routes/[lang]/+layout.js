import { loadTranslations } from "$lib/translations";

export async function load(event){
    let {pathname} = event.url
    let locale = pathname.split`/`[1]
    let path = pathname.split`/`.slice(2).join`/`
    await loadTranslations(locale,path)
    return {
        locale,
        path
    }
}