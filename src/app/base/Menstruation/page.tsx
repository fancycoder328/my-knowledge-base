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
import { useRef } from "react";

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
                The first menstrual period occurs after the onset of pubertal growth, and is called menarche. The average age of menarche is 12 to 15 years. However, it may occur as early as eight. The average age of the first period is generally later in the developing world, and earlier in the developed world. The average age of menarche has changed little in the United States since the 1950s.
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
            <ParagraphSecondaryHeader id="This_can_be_continued">[This can be continued]</ParagraphSecondaryHeader>
        </>
    );

    return (
        <Layout topic="Progressive Function" title="Menstruation" thumbnail="/assets/menstruation.png" content={content} />
    );
};
