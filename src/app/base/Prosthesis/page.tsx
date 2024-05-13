import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Link from "@/components/Link";
import ReferencingVisual from "@/components/ReferencingVisual";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prosthesis - Knowledge Base | Developer Sujay",
};

export default function Prosthesis() {
    const content = (
        <>
            <p>
                In medicine, a <Bold>prosthesis</Bold> (pl.: prostheses; from Ancient Greek: πρόσθεσις, romanized: <i>prósthesis</i>, lit. &apos;addition, application, attachment&apos;), or a <Bold>prosthetic implant</Bold>, is an artificial device that replaces a missing body part, which may be lost through physical trauma, disease, or a condition present at birth (congenital disorder). Prostheses are intended to restore the normal functions of the missing body part. Amputee rehabilitation is primarily coordinated by a physiatrist as part of an inter-disciplinary team consisting of physiatrists, prosthetists, nurses, physical therapists, and occupational therapists. Prostheses can be created by hand or with computer-aided design (CAD), a software interface that helps creators design and analyze the creation with computer-generated 2-D and 3-D graphics as well as analysis and optimization tools.
            </p>
            <ParagraphSecondaryHeader id="Types">Types</ParagraphSecondaryHeader>
            <p id="Types">
                A person&apos;s prosthesis should be designed and assembled according to the person&apos;s appearance and functional needs. For instance, a person may need a transradial prosthesis, but the person needs to choose between an aesthetic functional device, a myoelectric device, a body-powered device, or an activity specific device. The person&apos;s future goals and economical capabilities may help them choose between one or more devices.
                <br />
                <br />
                Craniofacial prostheses include intra-oral and extra-oral prostheses. Extra-oral prostheses are further divided into hemifacial, auricular (ear), nasal, orbital and ocular. Intra-oral prostheses include dental prostheses, such as dentures, obturators, and dental implants.
                <br />
                <br />
                Prostheses of the neck include larynx substitutes, trachea and upper esophageal replacements,
                <br />
                <br />
                Somato prostheses of the torso include breast prostheses which may be either single or bilateral, full breast devices or nipple prostheses.
                <br />
                <br />
                Penile prostheses are used to treat erectile dysfunction, correct penile deformity, perform phalloplasty procedures in cisgender men, and to build a new penis in female-to-male gender reassignment surgeries.
            </p>
            <h1 className="font-bold text-xl pt-4 pb-2">Limb prosthesis</h1>
            <p>
                <Link slug="Limb" title="Limb" /> prostheses include both upper- and lower-extremity prostheses.
                <br />
                <br />
                <Bold>Upper-extremity prostheses</Bold> are used at varying levels of amputation: forequarter, shoulder disarticulation, transhumeral prosthesis, elbow disarticulation, transradial prosthesis, wrist disarticulation, full hand, partial hand, finger, partial finger. A transradial prosthesis is an artificial limb that replaces an arm missing below the elbow.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Army_prosthetic.jpg/241px-Army_prosthetic.jpg" w={450} h={450} caption={
                (
                    <>
                        An example of two upper-extremity prosthetics, one body-powered (right arm), and another myoelectric (left arm).
                    </>
                )
            } />
            <p>
                <br />
                <br />
                Upper limb prostheses can be categorized in three main categories: Passive devices, Body Powered devices, and Externally Powered (myoelectric) devices. Passive devices can either be passive hands, mainly used for cosmetic purposes, or passive tools, mainly used for specific activities (e.g. leisure or vocational). An extensive overview and classification of passive devices can be found in a literature review by Maat <i>et.al</i>. A passive device can be static, meaning the device has no movable parts, or it can be adjustable, meaning its configuration can be adjusted (e.g. adjustable hand opening). Despite the absence of active grasping, passive devices are very useful in bimanual tasks that require fixation or support of an object, or for gesticulation in social interaction. According to scientific data a third of the upper limb amputees worldwide use a passive prosthetic hand. Body Powered or cable-operated limbs work by attaching a harness and cable around the opposite shoulder of the damaged arm. A recent body-powered approach has explored the utilization of the user&apos;s breathing to power and control the prosthetic hand to help eliminate actuation cable and harness.
                <br />
                <br />
                The third category of available prosthetic devices comprises myoelectric arms. This particular class of devices distinguishes itself from the previous ones due to the inclusion of a battery system. This battery serves the dual purpose of providing energy for both actuation and sensing components. While actuation predominantly relies on motor or pneumatic systems, a variety of solutions have been explored for capturing muscle activity, including techniques such as Electromyography, Sonomyography, Myokinetic, and others. These methods function by detecting the minute electrical currents generated by contracted muscles during upper arm movement, typically employing electrodes or other suitable tools. Subsequently, these acquired signals are converted into gripping patterns or postures that the artificial hand will then execute.
                <br />
                <br />
                In the prosthetics industry, a trans-radial prosthetic arm is often referred to as a &quot;BE&quot; or below elbow prosthesis.
                <br />
                <br />
                <Bold>Lower-extremity prostheses</Bold> provide replacements at varying levels of amputation. These include hip disarticulation, transfemoral prosthesis, knee disarticulation, transtibial prosthesis, Syme&apos;s amputation, foot, partial foot, and toe. The two main subcategories of lower extremity prosthetic devices are trans-tibial (any amputation transecting the tibia bone or a congenital anomaly resulting in a tibial deficiency) and trans-femoral (any amputation transecting the femur bone or a congenital anomaly resulting in a femoral deficiency).
                <br />
                <br />
                A transfemoral prosthesis is an artificial limb that replaces a leg missing above the knee. Transfemoral amputees can have a very difficult time regaining normal movement. In general, a transfemoral amputee must use approximately 80% more energy to walk than a person with two whole legs. This is due to the complexities in movement associated with the knee. In newer and more improved designs, hydraulics, carbon fiber, mechanical linkages, motors, computer microprocessors, and innovative combinations of these technologies are employed to give more control to the user. In the prosthetics industry, a trans-femoral prosthetic leg is often referred to as an &quot;AK&quot; or above the knee prosthesis.
                <br />
                <br />
                A transtibial prosthesis is an artificial limb that replaces a leg missing below the knee. A transtibial amputee is usually able to regain normal movement more readily than someone with a transfemoral amputation, due in large part to retaining the knee, which allows for easier movement. Lower extremity prosthetics describe artificially replaced limbs located at the hip level or lower. In the prosthetics industry, a trans-tibial prosthetic leg is often referred to as a &quot;BK&quot; or below the knee prosthesis.
                <br />
                <br />
                Prostheses are manufactured and fit by clinical Prosthetists. Prosthetists are healthcare professionals responsible for making, fitting, and adjusting prostheses and for lower limb prostheses will assess both gait and prosthetic alignment. Once a prosthesis has been fit and adjusted by a Prosthetist, a rehabilitation Physiotherapist (called Physical Therapist in America) will help teach a new prosthetic user to walk with a leg prosthesis. To do so, the physical therapist may provide verbal instructions and may also help guide the person using touch or tactile cues. This may be done in a clinic or home. There is some research suggesting that such training in the home may be more successful if the treatment includes the use of a treadmill. Using a treadmill, along with the physical therapy treatment, helps the person to experience many of the challenges of walking with a prosthesis.
                <br />
                <br />
                In the United Kingdom, 75% of lower limb amputations are performed due to inadequate <Link slug="Circulatory_system" title="circulation" /> (dysvascularity). This condition is often associated with many other medical conditions (co-morbidities) including diabetes and heart disease that may make it a challenge to recover and use a prosthetic limb to regain mobility and independence. For people who have inadequate circulation and have lost a lower limb, there is insufficient evidence due to a lack of research, to inform them regarding their choice of prosthetic rehabilitation approaches.
                <br />
                <br />
                Lower extremity prostheses are often categorized by the level of amputation or after the name of a surgeon:
                <br />
                <br />
            </p>
            <div className="pl-4">
                <ul className="list-disc pl-4">
                    <li>
                        Transfemoral (Above-knee) sdafdsfsdf sdfsdfsdfsd sdfsdfsdfsd sdfsdfsdf
                    </li>
                    <li>
                        Transtibial (Below-knee)
                    </li>
                    <li>
                        Ankle disarticulation (more commonly known as Syme&apos;s amputation)
                    </li>
                    <li>
                        Knee disarticulation
                    </li>
                    <li>
                        Hip disarticulation
                    </li>
                    <li>
                        Hemi-pelvictomy
                    </li>
                    <li>
                        Partial foot amputations (Pirogoff, Talo-Navicular and Calcaneo-cuboid (Chopart), Tarso-metatarsal (Lisfranc), Trans-metatarsal, Metatarsal-phalangeal, Ray amputations, toe amputations).
                    </li>
                    <li>
                        Van Nes rotationplasty
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Replacement_surgery_-_Shoulder_total_hip_and_total_knee_replacement_--_Smart-Servier_%28cropped%29.jpg/300px-Replacement_surgery_-_Shoulder_total_hip_and_total_knee_replacement_--_Smart-Servier_%28cropped%29.jpg" w={450} h={450} caption={
                (
                    <>
                        Types of prosthesis used for replacing joints in the human body
                    </>
                )
            } />
            <br />
            <br />
            <h1 className="text-xl font-bold pb-4">Prosthetic raw materials</h1>
            <p>
                Prosthetic are made lightweight for better convenience for the amputee. Some of these materials include:
                <br />
                <br />
                <div className="pl-4">
                    <ul className="pl-4 list-disc">
                        <li>
                            Plastics:
                            <ul className="pl-4 list-disc">
                                <li>
                                    Polyethylene
                                </li>
                                <li>
                                    Polypropylene
                                </li>
                                <li>
                                    Acrylics
                                </li>
                                <li>
                                    Polyurethane
                                </li>
                            </ul>
                        </li>
                        <li>
                            Wood (early prosthetics)
                        </li>
                        <li>
                            Rubber (early prosthetics)
                        </li>
                        <li>
                            Lightweight metals:
                            <ul className="pl-4 list-disc">
                                <li>
                                    Titanium
                                </li>
                                <li>
                                    Aluminum
                                </li>
                            </ul>
                        </li>
                        <li>
                            Composites:
                            <ul className="pl-4 list-disc">
                                <li>
                                    Carbon fiber reinforced polymers
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <br />
                Wheeled prostheses have also been used extensively in the rehabilitation of injured domestic animals, including dogs, cats, pigs, rabbits, and turtles
            </p>
            <ParagraphSecondaryHeader id="History">History</ParagraphSecondaryHeader>
            <p id="History">
                Prosthetics originate from the ancient Near East circa 3000 BCE, with the earliest evidence of prosthetics appearing in ancient Egypt and Iran. The earliest recorded mention of eye prosthetics is from the Egyptian story of the Eye of Horus dates circa 3000 BC, which involves the left eye of Horus being plucked out and then restored by Thoth. Circa 3000-2800 BC, the earliest archaeological evidence of prosthetics is found in ancient Iran, where an eye prosthetic is found buried with a woman in Shahr-i Shōkhta. It was likely made of bitumen paste that was covered with a thin layer of gold. The Egyptians were also early pioneers of foot prosthetics, as shown by the wooden toe found on a body from the New Kingdom circa 1000 BC. Another early textual mention is found in South Asia circa 1200 BC, involving the warrior queen Vishpala in the Rigveda. Roman bronze crowns have also been found, but their use could have been more aesthetic than medical.
                <br />
                <br />
                <h1 className="font-bold text-xl pb-4">Wood and metal prostheses</h1>
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Roman_artificial_leg_of_bronze._Wellcome_M0012307.jpg/170px-Roman_artificial_leg_of_bronze._Wellcome_M0012307.jpg" w={300} h={300} caption={
                    (
                        <>
                            The Capua leg (replica)
                        </>
                    )
                } />
                <br />
                <br />
                Pliny the Elder also recorded the tale of a Roman general, Marcus Sergius, whose right hand was cut off while campaigning and had an <Bold>iron hand</Bold> made to hold his shield so that he could return to battle.
                <br />
                <br />
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Eiserne_Hand_Glasnegativ_6_cropped.jpg/330px-Eiserne_Hand_Glasnegativ_6_cropped.jpg" w={300} h={300} caption={
                    (
                        <>
                            Iron prosthetic hand believed to have been owned by Götz von Berlichingen (1480–1562)
                        </>
                    )
                } />
                <br />
                <br />
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Shengjindian_prosthetic_leg%2C_300-200_BCE.jpg/330px-Shengjindian_prosthetic_leg%2C_300-200_BCE.jpg" w={300} h={300} caption={
                    (
                        <>
                            A wooden prosthetic leg from Shengjindian cemetery, circa 300 BCE, Turpan Museum. This is &quot;the oldest functional leg prosthesis known to date&quot;.
                        </>
                    )
                } />
                <br />
                <br />
                A famous and quite refined historical prosthetic arm was that of Götz von Berlichingen, made at the beginning of the 16th century. The first confirmed use of a prosthetic device, however, is from 950 to 710 BC. In 2000, research pathologists discovered a mummy from this period buried in the Egyptian necropolis near ancient Thebes that possessed an artificial big toe. This toe, consisting of wood and leather, exhibited evidence of use. When reproduced by bio-mechanical engineers in 2011, researchers discovered that this ancient prosthetic enabled its wearer to walk both barefoot and in Egyptian style sandals. Previously, the earliest discovered prosthetic was an artificial <Bold>leg from Capua</Bold>.
                <br />
                <br />
                Around the same time, François de la Noue is also reported to have had an iron hand, as is, in the 17th century, René-Robert Cavalier de la Salle. Henri de Tonti had a prosthetic hook for a hand. During the Middle Ages, prosthetics remained quite basic in form. Debilitated knights would be fitted with prosthetics so they could hold up a shield, grasp a lance or a sword, or stabilize a mounted warrior. Only the wealthy could afford anything that would assist in daily life.
                <br />
                <br />
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ambroise_Pare%3B_prosthetics%2C_mechanical_hand_Wellcome_L0023364.jpg/170px-Ambroise_Pare%3B_prosthetics%2C_mechanical_hand_Wellcome_L0023364.jpg" w={300} h={300} caption={
                    (
                        <>
                            &quot;Illustration of mechanical hand&quot;, c. 1564
                        </>
                    )
                } />
                <br />
                <br />
                One notable prosthesis was that belonging to an Italian man, who scientists estimate replaced his amputated right hand with a knife. Scientists investigating the skeleton, which was found in a Longobard cemetery in Povegliano Veronese, estimated that the man had lived sometime between the 6th and 8th centuries AD. Materials found near the man&apos;s body suggest that the knife prosthesis was attached with a leather strap, which he repeatedly tightened with his teeth.
                <br />
                <br />
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Iron_artificial_arm%2C_1560-1600._%289663806794%29.jpg/220px-Iron_artificial_arm%2C_1560-1600._%289663806794%29.jpg" w={300} h={300} caption={
                    (
                        <>
                            Artificial iron hand believed to date from 1560 to 1600
                        </>
                    )
                } />
                <br />
                <br />
                <h1 className="text-xl font-bold pb-4">Technology progress before the 20th Century</h1>
                An Italian surgeon recorded the existence of an amputee who had an arm that allowed him to remove his hat, open his purse, and sign his name. Improvement in amputation surgery and prosthetic design came at the hands of Ambroise Paré. Among his inventions was an above-knee device that was a kneeling peg leg and foot prosthesis with a fixed position, adjustable harness, and knee lock control. The functionality of his advancements showed how future prosthetics could develop.
                <br />
                <br />
                Other major improvements before the modern era:
                <br />
                <br />
                <div className="pl-4">
                    <ul className="pl-4 list-disc">
                        <li>
                            Pieter Verduyn – First non-locking below-knee (BK) prosthesis.
                        </li>
                        <li>
                            Pieter Verduyn – First non-locking below-knee (BK) prosthesis.
                        </li>
                        <li>
                            James Potts – Prosthesis made of a wooden shank and socket, a steel knee joint and an articulated foot that was controlled by catgut tendons from the knee to the ankle. Came to be known as &quot;Anglesey Leg&quot; or &quot;Selpho Leg&quot;.
                        </li>
                        <li>
                            Sir James Syme – A new method of ankle amputation that did not involve amputating at the thigh.
                        </li>
                        <li>
                            Benjamin Palmer – Improved upon the Selpho leg. Added an anterior spring and concealed tendons to simulate natural-looking movement.
                        </li>
                        <li>
                            Dubois Parmlee – Created prosthetic with a suction socket, polycentric knee, and multi-articulated foot.
                        </li>
                        <li>
                            Marcel Desoutter & Charles Desoutter – First aluminium prosthesis.
                        </li>
                        <li>
                            Henry Heather Bigg, and his son Henry Robert Heather Bigg, won the Queen&apos;s command to provide &quot;surgical appliances&quot; to wounded soldiers after Crimea War. They developed arms that allowed a double arm amputee to crochet, and a hand that felt natural to others based on ivory, felt and leather.
                        </li>
                    </ul>
                </div>
                <br />
                <br />
                At the end of World War II, the NAS (National Academy of Sciences) began to advocate better research and development of prosthetics. Through government funding, a research and development program was developed within the Army, Navy, Air Force, and the Veterans Administration.
                <br />
                <br />
                <br />
                <h1 className="font-bold text-xl">Lower extremity modern history</h1>
                <br />
                After the Second World War a team at the University of California, Berkeley including James Foort and C.W. Radcliff helped to develop the quadrilateral socket by developing a jig fitting system for amputations above the knee. Socket technology for lower extremity limbs saw a further revolution during the 1980s when John Sabolich C.P.O., invented the Contoured Adducted Trochanteric-Controlled Alignment Method (CATCAM) socket, later to evolve into the Sabolich Socket. He followed the direction of Ivan Long and Ossur Christensen as they developed alternatives to the quadrilateral socket, which in turn followed the open ended plug socket, created from wood. The advancement was due to the difference in the socket to patient contact model. Prior to this, sockets were made in the shape of a square shape with no specialized containment for muscular tissue. New designs thus help to lock in the bony anatomy, locking it into place and distributing the weight evenly over the existing limb as well as the musculature of the patient. Ischial containment is well known and used today by many prosthetist to help in patient care. Variations of the ischial containment socket thus exists and each socket is tailored to the specific needs of the patient. Others who contributed to socket development and changes over the years include Tim Staats, Chris Hoyt, and Frank Gottschalk. Gottschalk disputed the efficacy of the CAT-CAM socket- insisting the surgical procedure done by the amputation surgeon was most important to prepare the amputee for good use of a prosthesis of any type socket design.
                <br />
                <br />
                The first microprocessor-controlled prosthetic knees became available in the early 1990s. The Intelligent Prosthesis was the first commercially available microprocessor-controlled prosthetic knee. It was released by Chas. A. Blatchford & Sons, Ltd., of Great Britain, in 1993 and made walking with the prosthesis feel and look more natural. An improved version was released in 1995 by the name Intelligent Prosthesis Plus. Blatchford released another prosthesis, the Adaptive Prosthesis, in 1998. The Adaptive Prosthesis utilized hydraulic controls, pneumatic controls, and a microprocessor to provide the amputee with a gait that was more responsive to changes in walking speed. Cost analysis reveals that a sophisticated above-knee prosthesis will be about $1 million in 45 years, given only annual cost of living adjustments.
                <br />
                <br />
                In 2019, a project under AT2030 was launched in which bespoke sockets are made using a thermoplastic, rather than through a plaster cast. This is faster to do and significantly less expensive. The sockets were called Amparo Confidence sockets.
                <br />
                <br />
                <br />
                <h1 className="text-xl font-bold">Upper extemity modern history</h1>
                <br />
                In 2005, DARPA started the Revolutionizing Prosthetics program.
                <br />
                <br />
                <br />
                <h1 className="text-xl font-bold">Design Trends Moving Forward</h1>
                <br />
                There are many steps in the evolution of prosthetic design trends that are moving forward with time. Many design trends point to lighter, more durable, and flexible materials like carbon fiber, silicone, and advanced polymers. These not only make the prosthetic limb lighter and more durable but also allow it to mimic the look and feel of natural skin, providing users with a more comfortable and natural experience. This new technology helps prosthetic users blend in with people with normal ligaments to reduce the stigmatism for people who wear prosthetics. Another trend points towards using bionics and myoelectric components in prosthetic design. These limbs utilize sensors to detect electrical signals from the user’s residual muscles. The signals are then converted into motions, allowing users to control their prosthetic limbs using their own muscle contractions. This has greatly improved the range and fluidity of movements available to amputees, making tasks like grasping objects or walking naturally much more feasible. Integration with AI is also on the forefront to the prosthetic design. AI-enabled prosthetic limbs can learn and adapt to the user’s habits and preferences over time, ensuring optimal functionality. By analyzing the user’s gait, grip, and other movements, these smart limbs can make real-time adjustments, providing smoother and more natural motions.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Prosthesis" title="Prosthesis" thumbnail="/assets/prosthesis.png" content={content} />
        </>
    );
};