import {Locale} from "../../../i18n.config";
import {getDictionary} from "../../../lib/dictionary";

export default async function Home({
                                       params: { lang }
                                   }: {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang)

    return (
        <div>
            <section id="section1">
                <h2>Секція 1</h2>
            </section>
            <section id="section2">
                <h2>Секція 2</h2>
            </section>
            <section id="section3">
                <h2>Секція 3</h2>
            </section>
        </div>
    )
}
