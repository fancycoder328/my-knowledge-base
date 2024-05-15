import CensoredImage from "@/components/CensoredImage";
import Bold from "@/components/Bold";
import Link from "@/components/Link";
import Layout from "@/layouts/Layout";
import OnboardingCitation from "@/components/OnboardingCitation";
import Citation from "@/components/Citation";
import { Metadata } from "next";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import SubTitle from "@/components/SubTitle";
import HighLightText from "@/components/HighLightText";
import ConfidentialImage from "@/components/ConfidentialImage";
import SecondarySubTitle from "@/components/SecondarySubTitle";
import Redirect from "@/components/Redirect";

export const metadata: Metadata = {
    title: "Menstruation - Knowledge Base | Developer Sujay",
};

export default function Menstruation() {
    const content = (
        <>
            <p>
                <Bold>Menstruation</Bold> (also known as a <Bold>period</Bold>, among other colloquial terms) is the regular discharge of blood and mucosal tissue from the inner lining of the uterus through the vagina. The menstrual cycle is characterized by the rise and fall of hormones. Menstruation is triggered by falling progesterone levels and is a sign that pregnancy has not occurred.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lining_of_Uterine_Wall.jpg/330px-Lining_of_Uterine_Wall.jpg" w={250} h={200} caption={
                (
                    <>
                        Diagram illustrating how the uterus lining builds up and breaks down during the menstrual cycle
                    </>
                )
            } />
            <br />
            <p>
                The first period, a point in time known as menarche, usually begins between the ages of 12 and 15. Menstruation starting as young as 8 years would still be considered normal. The average age of the first period is generally later in the developing world, and earlier in the developed world. The typical length of time between the first day of one period and the first day of the next is 21 to 45 days in young women. In adults, the range is between 21 and 35 days with the average being 28 days. Bleeding usually lasts around 2 to 7 days. Periods stop during pregnancy and typically do not resume during the initial months of breastfeeding. Menstruation, and with it the possibility of pregnancy, ceases after menopause, which usually occurs between 45 and 55 years of age.
                <br />
                <br />
                Up to 80% of women do not experience problems sufficient to disrupt daily functioning either during menstruation or in the days leading up to menstruation. Symptoms in advance of menstruation that do interfere with normal life are called premenstrual syndrome (PMS). Some 20 to 30% of women experience PMS, with 3 to 8% experiencing severe symptoms. These include acne, tender breasts, bloating, feeling tired, irritability, and mood changes. Other symptoms some women experience include painful periods and heavy bleeding during menstruation and abnormal bleeding at any time during the menstrual cycle. A lack of periods, known as amenorrhea, is when periods do not occur by age 15 or have not re-occurred in 90 days.
            </p>
            <ParagraphSecondaryHeader id="Characteristics">Characteristics</ParagraphSecondaryHeader>
            <span id="Characteristics"></span>
            <SubTitle>Length and duration</SubTitle>
            <p>
                <HighLightText text="The first menstrual period occurs after the onset of pubertal growth, and is called menarche" />. The average age of menarche is 12 to 15 years. However, <HighLightText text="it may occur as early as eight" />. The average age of the first period is generally later in the developing world, and earlier in the developed world. The average age of menarche has changed little in the United States since the 1950s.
                <br />
                <br />
                Menstruation is the most visible phase of the menstrual cycle and its beginning is used as the marker between cycles. The first day of menstrual bleeding is the date used for the last menstrual period (LMP). The typical length of time between the first day of one period and the first day of the next is 21 to 45 days in young women, and 21 to 35 days in adults. The average length is 28 days; one study estimated it at 29.3 days. The variability of menstrual cycle lengths is highest for women under 25 years of age and is lowest, that is, most regular, for ages 25 to 39 years. The variability increases slightly for women aged 40 to 44 years.
                <br />
                <br />
                Perimenopause is when a woman&apos;s fertility declines, and menstruation occurs less regularly in the years leading up to the final menstrual period, when a woman stops menstruating completely and is no longer fertile. The medical definition of menopause is one year without a period and typically occurs between 45 and 55 years in Western countries.: 381  Menopause before age 45 is considered premature in industrialized countries. Like the age of menarche, the age of menopause is largely a result of cultural and biological factors. Illnesses, certain surgeries, or medical treatments may cause menopause to occur earlier than it might have otherwise.
            </p>
            <br />
            <SubTitle>Bleeding</SubTitle>
            <CensoredImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Menstrual_fluid_in_cup_2nd_day_40s_female.jpg/330px-Menstrual_fluid_in_cup_2nd_day_40s_female.jpg" w={250} h={300} caption={
                (
                    <>
                        Menstrual cup filled with menstrual fluid
                    </>
                )
            } />
            <br />
            <p>
                The average volume of menstrual fluid during a monthly menstrual period is 35 millilitres (2.4 US tbsp) with 10–80 millilitres (0.68–5.41 US tbsp) considered typical. Menstrual fluid is the correct name for the flow, although many people prefer to refer to it as menstrual blood. Menstrual fluid is reddish-brown, a slightly darker color than venous blood.
                About half of menstrual fluid is blood. This blood contains sodium, calcium, phosphate, iron, and chloride, the extent of which depends on the woman. As well as blood, the fluid consists of cervical mucus, vaginal secretions, and endometrial tissue. Vaginal fluids in menses mainly contribute water, common electrolytes, organ moieties, and at least 14 proteins, including glycoproteins.
                <br />
                <br />
                Many women and girls notice blood clots during menstruation. These appear as clumps of blood that may look like tissue. If there was a miscarriage or a stillbirth, examination under a microscope can confirm if it was endometrial tissue or pregnancy tissue (products of conception) that was shed. Sometimes menstrual clots or shed endometrial tissue is incorrectly thought to indicate an early-term miscarriage of an embryo. An enzyme called plasmin – contained in the endometrium – tends to inhibit the blood from clotting.
                <br />
                <br />
                The amount of iron lost in menstrual fluid is relatively small for most women. In one study, premenopausal women who exhibited symptoms of iron deficiency were given endoscopies. 86% of them actually had gastrointestinal disease and were at risk of being misdiagnosed simply because they were menstruating. Heavy menstrual bleeding, occurring monthly, can result in anemia.
            </p>
            <br />
            <SubTitle>Hormonal changes</SubTitle>
            <p>
                The menstrual cycle is a series of natural changes in hormone production and the structures of the uterus and ovaries of the female reproductive system that makes pregnancy possible. The ovarian cycle controls the production and release of <Link slug="Egg_cell" title="eggs" /> and the cyclic release of <Bold>estrogen</Bold> and <Bold>progesterone</Bold>. The uterine cycle governs the preparation and maintenance of the lining of the uterus (womb) to receive an embryo. These cycles are concurrent and coordinated, normally last between 21 and 35 days, with a median length of 28 days, and continue for about 30–45 years.
                <br />
                <br />
                Naturally occurring hormones drive the cycles; the cyclical rise and fall of the follicle stimulating hormone prompts the production and growth of oocytes (immature egg cells). The hormone estrogen stimulates the uterus lining (endometrium) to thicken to accommodate an embryo should fertilization occur. The blood supply of the thickened lining provides nutrients to a successfully implanted embryo. If implantation does not occur, the lining breaks down and blood is released. Triggered by falling progesterone levels, menstruation (a &quot;period&quot;, in common parlance) is the cyclical shedding of the lining, and is a sign that pregnancy has not occurred.
            </p>
            <ParagraphSecondaryHeader id="Side_effects">Side effects</ParagraphSecondaryHeader>
            <span id="Side_effects"></span>
            <SubTitle>Menstrual health overview</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Human_ovarian_follicle.jpg/220px-Human_ovarian_follicle.jpg" w={230} h={170} caption={
                (
                    <>
                        A human primary ovarian follicle viewed by microscopy. The round oocyte stained red in the center is surrounded by a layer of granulosa cells, which are enveloped by the basement membrane and theca cells. The magnification is around 1000 times. (H&E stain)
                    </>
                )
            } />
            <br />
            <p>
                Although a normal and natural process, some women experience <Bold>premenstrual syndrome</Bold> with symptoms that may include <Bold>acne</Bold>, <Bold>tender breasts</Bold>, and <Bold>tiredness</Bold>. More severe symptoms that affect daily living are classed as <HighLightText text="premenstrual dysphoric disorder and are experienced by 3 to 8% of women" />. <HighLightText text="Dysmenorrhea (menstrual cramps or period pain) is felt as painful cramps in the abdomen that can spread to the back and upper thighs during the first few days of menstruation. Debilitating period pain is not normal and can be a sign of something severe such as endometriosis" />. These issues can significantly affect a woman&apos;s health and quality of life and timely interventions can improve the lives of these women.
                <br />
                <br />
                There are common culturally communicated misbeliefs that the menstrual cycle affects women&apos;s moods, causes depression or irritability, or that menstruation is a painful, shameful or unclean experience. Often a woman&apos;s normal mood variation is falsely attributed to the menstrual cycle. Much of the research is weak, but there appears to be a very small increase in mood fluctuations during the luteal and menstrual phases, and a corresponding decrease during the rest of the cycle. Changing levels of estrogen and progesterone across the menstrual cycle exert systemic effects on aspects of physiology including the brain, metabolism, and musculoskeletal system. The result can be subtle physiological and observable changes to women&apos;s athletic performance including strength, aerobic, and anaerobic performance.
            </p>
            <br />
            <SubTitle>Moods and premenstrual syndrome (PMS)</SubTitle>
            <p>
                Premenstrual syndrome (PMS) is a disruptive set of emotional and physical symptoms that regularly occur in the one to two weeks before the start of each menstrual period. Symptoms resolve around the time menstrual bleeding begins. Different women experience different symptoms. Premenstrual syndrome commonly produces one or more physical, emotional, or behavioral symptoms, that resolve with menses. The range of symptoms is wide, and most commonly are breast tenderness, bloating, headache, mood swings, depression, anxiety, anger, and irritability. To be diagnosed as PMS, rather than a normal discomfort of the menstrual cycle, these symptoms must interfere with daily living, during two menstrual cycles of prospective recording. These symptoms are nonspecific and are seen in women without PMS. Often PMS-related symptoms are present for about six days. An individual&apos;s pattern of symptoms may change over time. PMS does not produce symptoms during pregnancy or following menopause.
                <br />
                <br />
                Diagnosis requires a consistent pattern of emotional and physical symptoms occurring after ovulation and before menstruation to a degree that interferes with normal life. Emotional symptoms must not be present during the initial part of the menstrual cycle. A daily list of symptoms over a few months may help in diagnosis. Other disorders that cause similar symptoms need to be excluded before a diagnosis is made.
                <br />
                <br />
                The cause of PMS is unknown, but the underlying mechanism is believed to involve changes in hormone levels during the course of the whole menstrual cycle. Reducing salt, alcohol, caffeine, and stress, along with increasing exercise is typically all that is recommended for the management of mild symptoms. Calcium and vitamin D supplementation may be useful in some. Anti-inflammatory drugs such as ibuprofen or naproxen may help with physical symptoms. In those with more significant symptoms, birth control pills or the diuretic spironolactone may be useful.
                <br />
                <br />
                Over 90% of women report having some premenstrual symptoms, such as bloating, headaches, and moodiness. Premenstrual symptoms generally do not cause substantial disruption, and qualify as PMS in approximately 20% of pre-menopausal women. Antidepressants of the selective serotonin reuptake inhibitors class may be used to treat the emotional symptoms of PMS.
                <br />
                <br />
                Premenstrual dysphoric disorder (PMDD) is a more severe condition that has greater psychological symptoms. PMDD affects about 3% of women of child-bearing age.
            </p>
            <br />
            <SubTitle>Cramps</SubTitle>
            <p>
                In most women, various physical changes are brought about by fluctuations in hormone levels during the menstrual cycle. This includes muscle contractions of the uterus (menstrual cramping) that can precede or accompany menstruation. Many women experience painful cramps, also known as dysmenorrhea, during menstruation. Among adult women, that pain is severe enough to affect daily activity in only 2%–28%. Severe symptoms that disrupt daily activities and functioning may be diagnosed as premenstrual dysphoric disorder. These symptoms can be severe enough to affect a person&apos;s performance at work, school, and in everyday activities in a small percentage of women.
                <br />
                <br />
                When severe pelvic pain and bleeding suddenly occur or worsen during a cycle, this could be due to ectopic pregnancy and spontaneous abortion. This is checked by using a pregnancy test, ideally as soon as unusual pain begins, because ectopic pregnancies can be life‑threatening.
                <br />
                <br />
                The most common treatment for menstrual cramps are non-steroidal anti-inflammatory drugs (NSAIDs). NSAIDs can be used to reduce moderate to severe pain, and all appear similar. About 1 in 5 women do not respond to NSAIDs and require alternative therapy, such as simple analgesics or heat pads. Other medications for pain management include aspirin or paracetamol and combined oral contraceptives. Although combined oral contraceptives may be used, there is insufficient evidence for the efficacy of intrauterine progestogens.
                <br />
                <br />
                One review found tentative evidence that acupuncture may be useful, at least in the short term. Another review found insufficient evidence to determine an effect.
            </p>
            <br />
            <SubTitle>Interactions with other conditions</SubTitle>
            <p>
                Known interactions between the menstrual cycle and certain health conditions include:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        Some women with neurological conditions experience increased activity of their conditions at about the same time during each menstrual cycle. For example, drops in estrogen levels may trigger migraines, especially when the woman who has migraines is also taking the birth control pill.
                    </li>
                    <br />
                    <li>
                        Many women with epilepsy have more seizures in a pattern linked to the menstrual cycle; this is called &quot;catamenial epilepsy&quot;. Different patterns seem to exist (such as seizures coinciding with the time of menstruation, or coinciding with the time of ovulation), and the frequency with which they occur has not been firmly established.
                    </li>
                    <br />
                    <li>
                        Research indicates that women have a significantly higher likelihood of anterior cruciate ligament injuries in the pre-ovulatory stage, than post-ovulatory stage.
                    </li>
                </ul>
            </div>
            <br />
            <SubTitle>Sexual activity</SubTitle>
            <p>
                Sexual feelings and behaviors change during the menstrual cycle. Before and during ovulation, high levels of estrogen and androgens result in women having a relatively increased interest in sexual activity, and relatively lower interest directly prior to and during menstruation. Unlike other mammals, women may show interest in sexual activity across all days of the menstrual cycle, regardless of fertility.
                <br />
                <br />
                There is no reliable scientific evidence that would advise against sexual intercourse during menstruation based on medical grounds.
            </p>
            <br />
            <SubTitle>Fertility aspects</SubTitle>
            <p>
                Peak fertility (the time with the highest likelihood of pregnancy resulting from sexual intercourse) occurs during just a few days of the cycle: usually two days before and two days after the ovulation date. This corresponds to the second and the beginning of the third week in a 28-day cycle. This fertile window varies from woman to woman, just as the ovulation date often varies from cycle to cycle for the same woman. A variety of methods have been developed to help individual women estimate the relatively fertile and the relatively infertile days in the cycle; these systems are called fertility awareness.
            </p>
            <ParagraphSecondaryHeader id="Menstrual_disorders">Menstrual disorders</ParagraphSecondaryHeader>
            <p id="Menstrual_disorders">
                Infrequent or irregular ovulation is called <i>oligoovulation</i>. The absence of ovulation is called <i>anovulation</i>. Normal menstrual flow can occur without ovulation preceding it: an anovulatory cycle. In some cycles, follicular development may start but not be completed; nevertheless, estrogens will be formed and stimulate the uterine lining. Anovulatory flow resulting from a very thick endometrium caused by prolonged, continued high estrogen levels is called estrogen breakthrough bleeding. Anovulatory bleeding triggered by a sudden drop in estrogen levels is called withdrawal bleeding. Anovulatory cycles commonly occur before menopause (perimenopause) and in women with polycystic ovary syndrome.
                <br />
                <br />
                Very little flow (less than 10 ml) is called <i>hypomenorrhea</i>. Regular cycles with intervals of 21 days or fewer are <i>polymenorrhea</i>; frequent but irregular menstruation is known as <i>metrorrhagia</i>. Sudden heavy flows or amounts greater than 80 ml are termed <i>menorrhagia</i>. Heavy menstruation that occurs frequently and irregularly is <i>menometrorrhagia</i>. The term for cycles with intervals exceeding 35 days is <i>oligomenorrhea</i>. Amenorrhea refers to more than three to six months without menses (while not being pregnant) during a woman&apos;s reproductive years. The term for painful periods is <i>dysmenorrhea</i>.
                <br />
                <br />
                There is a wide spectrum of differences in how women experience menstruation. There are several ways that someone&apos;s menstrual cycle can differ from the norm:
            </p>
            <br />
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-center">Term</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-center">
                                            Meaning
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Oligomenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Infrequent periods</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium">
                                            Hypomenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Short or light periods</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Polymenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Frequent periods (more frequently than every 21 days)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Hypermenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Heavy or long periods (soaking a sanitary napkin or tampon every hour, menstruating longer than 7 days)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Dysmenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Painful periods</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Intermenstrual bleeding
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Breakthrough bleeding (also called spotting)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Amenorrhea
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">Absence of periods</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <p>
                <HighLightText text="Extreme psychological stress can also result in periods stopping. More severe symptoms of anxiety or depression may be signs of premenstrual dysphoric disorder (PMDD) with is a depressive disorder" />.
                <br />
                <br />
                Dysfunctional uterine bleeding is a hormonally caused bleeding abnormality. Dysfunctional uterine bleeding typically occurs in premenopausal women who do not ovulate normally (i.e. are anovulatory). All these bleeding abnormalities need medical attention; they may indicate hormone imbalances, uterine fibroids, or other problems. As pregnant women may bleed, a pregnancy test forms part of the evaluation of abnormal bleeding.
                <br />
                <br />
                Women who had undergone female genital mutilation (particularly type III- infibulation) a practice common in parts of Africa, may experience menstrual problems, such as slow and painful menstruation, that is caused by the near-complete sealing off of the vagina.
            </p>
            <br />
            <SubTitle>Dysmenorrhea</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/MenstrualCycle_gen.svg/220px-MenstrualCycle_gen.svg.png" w={180} h={350} caption={
                (
                    <>
                        Menstrual cycle and changes in hormone production
                    </>
                )
            } />
            <br />
            <p>
                Dysmenorrhea, also known as period pain, painful periods or menstrual cramps, is pain during menstruation. Its usual onset occurs around the time that menstruation begins. Symptoms typically last less than three days. The pain is usually in the pelvis or lower abdomen. Other symptoms may include back pain, diarrhea or nausea.
                <br />
                <br />
                Dysmenorrhea can occur without an underlying problem. Underlying issues that can cause dysmenorrhea include uterine fibroids, adenomyosis, and most commonly, endometriosis. It is more common among those with heavy periods, irregular periods, those whose periods started before twelve years of age and those who have a low body weight. A pelvic exam and ultrasound in individuals who are sexually active may be useful for diagnosis. Conditions that should be ruled out include ectopic pregnancy, pelvic inflammatory disease, interstitial cystitis and chronic pelvic pain.
                <br />
                <br />
                Dysmenorrhea occurs less often in those who exercise regularly and those who have children early in life. Treatment may include the use of a heating pad. Medications that may help include NSAIDs such as ibuprofen, hormonal birth control and the IUD with progestogen. Taking vitamin B1 or magnesium may help. Evidence for yoga, acupuncture and massage is insufficient. Surgery may be useful if certain underlying problems are present.
                <br />
                <br />
                <HighLightText text="Estimates of the percentage of female adolescents, and women of reproductive age affected are between 50% and 90%. It is the most common menstrual disorder. Typically, it starts within a year of the first menstrual period. When there is no underlying cause, often the pain improves with age or following having a child" />.
            </p>
            <ParagraphSecondaryHeader id="Menstrual_hygiene_management">Menstrual hygiene management</ParagraphSecondaryHeader>
            <span id="Menstrual_hygiene_management"></span>
            <ConfidentialImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Everyday_maxipad.jpg/189px-Everyday_maxipad.jpg" w={250} h={300} caption={
                (
                    <>
                        Disposable sanitary napkin
                    </>
                )
            } />
            <br />
            <ConfidentialImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Elements_of_a_tampon_with_applicator.jpg/189px-Elements_of_a_tampon_with_applicator.jpg" w={300} h={200} caption={
                (
                    <>
                        The elements of a tampon with applicator. Left: the bigger tube (&quot;penetrator&quot;). Center: cotton tampon with attached string. Right: the narrower tube.
                    </>
                )
            } />
            <br />
            <ConfidentialImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coupe-menstruelle.jpg/248px-Coupe-menstruelle.jpg" w={180} h={180} caption={
                (
                    <>
                        Menstrual cup
                    </>
                )
            } />
            <br />
            <ConfidentialImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Clothpad.jpg/444px-Clothpad.jpg" w={300} h={200} caption={
                (
                    <>
                        Menstrual pad made of cloth
                    </>
                )
            } />
            <br />
            <p>
                Menstrual products (also called &quot;feminine hygiene&quot; products) are made to absorb or catch menstrual blood. A number of different products are available – some are disposable, some are reusable. Where women can afford it, items used to absorb or catch menses are usually commercially manufactured products. Menstruating women manage menstruation primarily by wearing menstrual products such as tampons, napkins or menstrual cups to catch the menstrual blood.
                <br />
                <br />
                The main disposable products (commercially manufactured) include:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <Bold>Sanitary napkins</Bold> (also called <Bold>sanitary towels</Bold> or <Bold>pads</Bold>) – Most used menstrual hygiene management product among all women. These are rectangular pieces of material worn attached to the underwear to absorb menstrual flow, often with an adhesive backing to hold the pad in place. Disposable pads may contain wood pulp or gel products, usually with a plastic lining and bleached.
                    </li>
                    <br />
                    <li>
                        <Bold>Tampons</Bold> – Less used among all women. These are usually disposable cylinders of treated rayon/cotton blends or all-cotton fleece, usually bleached, that are inserted into the vagina to absorb menstrual flow.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                The main reusable products include:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <Bold>Menstrual cups</Bold> – A firm, flexible bell-shaped device worn inside the vagina to collect menstrual flow.
                    </li>
                    <br />
                    <li>
                        <Bold>Reusable cloth pads</Bold> – Pads that are made of cotton (often organic), terrycloth, or flannel, and may be handsewn (from material or reused old clothes and towels) or storebought.
                    </li>
                    <br />
                    <li>
                        <Bold>Padded panties</Bold> or <Bold>period-proof underwear</Bold> – Reusable cloth (usually cotton) underwear with extra absorbent layers sewn in to absorb flow.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                Due to poverty, some women cannot afford commercial feminine hygiene products. Instead, they use materials found in the environment or other improvised materials. &quot;Period poverty&quot; is a global issue affecting women and girls who do not have access to safe, hygienic sanitary products. In addition, solid waste disposal systems in developing countries are often lacking, which means women have no proper place to dispose used products, such as pads. Inappropriate disposal of used materials also creates pressures on sanitation systems as menstrual hygiene products can create blockages of toilets, pipes and sewers. In the UK research has shown that for women allotment growers, access to sanitation for menstrual hygiene management is limited.
            </p>
            <ParagraphSecondaryHeader id="Menstrual_suppression">Menstrual suppression</ParagraphSecondaryHeader>
            <span id="Menstrual_suppression"></span>
            <SubTitle>Due to hormonal contraception</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pillpacketopen.jpg" w={260} h={200} caption={
                (
                    <>
                        Half-used blister pack of a combined oral contraceptive. The white pills are placebos, mainly for the purpose of reminding the woman to continue taking the pills.
                    </>
                )
            } />
            <br />
            <p>
                Menstruation can be delayed by the use of progesterone or progestins. For this purpose, oral administration of progesterone or progestin during cycle day 20 has been found to effectively delay menstruation for at least 20 days, with menstruation starting after 2–3 days have passed since discontinuing the regimen.
                <br />
                <br />
                Hormonal contraception affects the frequency, duration, severity, volume, and regularity of menstruation and menstrual symptoms. The most common form of hormonal contraception is the combined birth control pill, which contains both estrogen and progestogen. Although the primary function of the pill is to prevent pregnancy, it may be used to improve some menstrual symptoms and syndromes which affect menstruation, <HighLightText text="such as polycystic ovary syndrome (PCOS), endometriosis, adenomyosis, amenorrhea, menstrual cramps, menstrual migraines, menorrhagia (excessive menstrual bleeding), menstruation-related or fibroid-related anemia and dysmenorrhea (painful menstruation) by creating regularity in menstrual cycles and reducing overall menstrual flow" />.
                <br />
                <br />
                Using the combined birth control pill, it is also possible for a woman to delay or eliminate menstrual periods, a practice called menstrual suppression. Some women do this simply for convenience in the short-term, while others prefer to eliminate periods altogether when possible. This can be done either by skipping the placebo pills, or using an extended cycle combined oral contraceptive pill, which were first marketed in the U.S. in the early 2000s. <HighLightText text="This continuous administration of active pills without the placebo can lead to the achievement of amenorrhea in 80% of users within 1 year of use" />.
            </p>
            <br />
            <SubTitle>Due to breastfeeding</SubTitle>
            <p>
                Breastfeeding causes negative feedback to occur on pulse secretion of gonadotropin-releasing hormone (GnRH) and luteinizing hormone (LH). Depending on the strength of the negative feedback, breastfeeding women may experience complete suppression of follicular development, follicular development but no ovulation, or normal menstrual cycles may resume. Suppression of ovulation is more likely when suckling occurs more frequently. The production of prolactin in response to suckling is important to maintaining lactational amenorrhea. On average, women who are fully breastfeeding whose infants suckle frequently experience a return of menstruation at fourteen and a half months postpartum. There is a wide range of response among individual breastfeeding women, however, with some experiencing return of menstruation at two months and others remaining amenorrheic for up to 42 months postpartum.
            </p>
            <ParagraphSecondaryHeader id="Society_and_culture">Society and culture</ParagraphSecondaryHeader>
            <span id="Society_and_culture"></span>
            <SubTitle>Etymology and terminology</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Amra_Padatik_India.jpg/330px-Amra_Padatik_India.jpg" w={200} h={190} caption={
                (
                    <>
                        Amra Padatik India, celebration of Menstrual Hygiene Day<OnboardingCitation citeNoteNumber={1} content={
                            (
                                <>
                                    <Bold>Menstrual Hygiene Day</Bold> is an annual awareness day on May 28 to highlight the importance of good menstrual hygiene management (MHM) at a global level. It was initiated by the German-based NGO WASH United in 2013 and observed for the first time in 2014.
                                </>
                            )
                        } /> in India
                    </>
                )
            } />
            <br />
            <p>
                The word <i>menstruation</i> is etymologically related to <i>moon</i>. The terms <i>menstruation</i> and <i>menses</i> are derived from the Latin <i>mensis</i> &apos;month&apos;, which in turn relates to the ancient Greek <i>mene</i> &apos;moon&apos; and to the roots of the English words month and moon.
                <br />
                <br />
                Some organizations have begun to use the term &quot;menstruator&quot; instead of &quot;menstruating women&quot;, a term that has been in use since at least 2010. Menstruator is used by activists and scholars in order to &quot;express solidarity with women who do not menstruate, transgender men who do, and intersexual and genderqueer individuals&quot;. The term can be contentious between different schools of feminist thought; however, the majority of feminist scholars consider the term to correctly reflect the reality that people of different genders menstruate. The term &quot;people who menstruate&quot; is also used.
            </p>
            <br />
            <SubTitle>Traditions, taboos and education</SubTitle>
            <p>
                Many religions have menstruation-related traditions, <HighLightText text="for example: Islam prohibits sexual contact with women during menstruation" /> in the <Redirect href="https://www.quran-online.com/quran-english/surah-al-baqara-english-2.html" text="2nd chapter of the Quran" />. Some scholars argue that menstruating women are in a state in which they are unable to maintain <i>Wuḍūʾ</i> (wudhu<OnboardingCitation citeNoteNumber={2} content={
                    (
                        <>
                            <i>Wuḍūʾ</i> is the Islamic procedure for cleansing parts of the body, a type of ritual purification, or ablution. The four Fardh (Mandatory) acts of wudu are washing the face, then the arms, then wiping the head, then washing or wiping the feet, and doing these in order without any big breaks between them.
                        </>
                    )
                } />), and are therefore prohibited from touching the Arabic version of the Qur&apos;an. Other biological and involuntary functions such as vomiting, bleeding, sexual intercourse, and going to the bathroom also invalidate one&apos;s wudhu. In Judaism, a woman during menstruation is called Niddah and may be banned from certain actions. For example, the Jewish Torah prohibits sexual intercourse with a menstruating woman. In Hinduism, menstruating women are traditionally considered ritually impure and given rules to follow.
                <br />
                <br />
                Menstruation education is frequently taught in combination with sex education at school in Western countries, although girls may prefer their mothers to be the primary source of information about menstruation and puberty. Information about menstruation is often shared among friends and peers, which may promote a more positive outlook on puberty. The quality of menstrual education in a society determines the accuracy of people&apos;s understanding of the process. In many Western countries where menstruation is a taboo subject, girls tend to conceal the fact that they may be menstruating and struggle to ensure that they give no sign of menstruation. Effective educational programs are essential to providing children and adolescents with clear and accurate information about menstruation. Schools can be an appropriate place for menstrual education to take place. Programs led by peers or third-party agencies are another option. Low-income girls are less likely to receive proper sex education on puberty, leading to a decreased understanding of why menstruation occurs and the associated physiological changes that take place. This has been shown to cause the development of a negative attitude towards menstruation.
            </p>
            <br />
            <SecondarySubTitle>Seclusion during menstruation</SecondarySubTitle>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mass-Community_Health_Teaching.JPG/220px-Mass-Community_Health_Teaching.JPG" w={200} h={200} caption={
                (
                    <>
                        Awareness raising through education is taking place among women and girls to modify or eliminate the practice of <i>chhaupadi</i> in Nepal.
                    </>
                )
            } />
            <br />
            <p>
                In some cultures, women were isolated during menstruation due to menstrual taboos. This is because they are seen as unclean, dangerous, or bringing bad luck to those who encounter them. These practices are common in parts of South Asia including India. A 1983 report found women refraining from household chore during this period in India. <i><Bold>Chhaupadi</Bold></i> is a social practice that occurs in the western part of Nepal for Hindu women, which prohibits a woman from participating in everyday activities during menstruation. Women are considered impure during this time and are kept out of the house and have to live in a shed. Although <i>chhaupadi</i> was outlawed by the Supreme Court of Nepal in 2005, the tradition is slow to change. Women and girls in cultures which practice such seclusion are often confined to menstruation huts, which are places of isolation used by cultures with strong menstrual taboos. The practice has recently come under fire due to related fatalities. Nepal criminalized the practice in 2017 after deaths were reported after the elongated isolation periods, but &quot;the practice of isolating menstruating women and girls continues.&quot; Not all cultures villainize menstruation, the Beng people of West Africa consider menstrual blood as sacred and recognize its significance in reproduction.
            </p>
            <br />
            <SubTitle>Beliefs around synchrony</SubTitle>
            <SecondarySubTitle>Effects of the moon</SecondarySubTitle>
            <br />
            <p>
                Even though the average length of the human menstrual cycle is similar to that of the lunar cycle, in modern humans there is no relation between the two. The relationship is believed to be a coincidence. Light exposure does not appear to affect the menstrual cycle in humans. A meta-analysis of studies from 1996 showed no correlation between the human menstrual cycle and the lunar cycle, nor did data analyzed by period-tracking app Clue, submitted by 1.5 million women, of 7.5 million menstrual cycles; however, the lunar cycle and the average menstrual cycle were found to be basically equal in length.
            </p>
            <br />
            <SecondarySubTitle>Cohabitation</SecondarySubTitle>
            <br />
            <p>
                Beginning in 1971, some research suggested that menstrual cycles of cohabiting women became synchronized (menstrual synchrony). Subsequent research has called this hypothesis into question. A 2013 review concluded that menstrual synchrony likely does not exist.
            </p>
            <br />
            <SubTitle>Work</SubTitle>
            <p>
                Some countries, mainly in Asia, have menstrual leave to provide women with either paid or unpaid leave of absence from their employment while they are menstruating. Countries with policies include Japan, Taiwan, Indonesia, and South Korea. The practice is controversial due to concerns that it bolsters the perception of women as weak, inefficient workers, as well as concerns that it is unfair to men, and that it furthers gender stereotypes and the medicalization of menstruation.
            </p>
            <ParagraphSecondaryHeader id="Other_mammals">Other mammals</ParagraphSecondaryHeader>
            <p id="Other_mammals">
                Most female mammals have an estrous cycle, but not all have a menstrual cycle that results in menstruation. Menstruation in mammals occurs in some close evolutionary relatives such as chimpanzees.
            </p>
        </>
    );

    return (
        <Layout topic="Progressive Function" title="Menstruation" thumbnail="/assets/menstruation.png" content={content} />
    );
};
