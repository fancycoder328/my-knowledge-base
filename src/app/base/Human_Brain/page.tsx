import Bold from "@/components/Bold";
import Link from "@/components/Link";
import Layout from "@/layouts/Layout";

export default function HumanBrain() {

    const content = (
        <>
            <p>
            The <Bold>brain</Bold> is the central <Link slug="Organ" title="organ" /> of the <Link slug="Human" title="human" /> <Link slug="Nervous_System" title="nervous system" />, and with the <Link slug="Spinal_cord" title="spinal cord" /> makes up the <Link slug="Central_nervous_system" title="central nervous system" />. The brain consists of the <Link slug="Cerebrum" title="cerebrum" />, the <Link slug="Brainstem" title="brainstem" /> and the <Link slug="Cerebellum" title="cerebellum" />. It controls most of the activities of the <Link slug="Human_body" title="body" />, processing, integrating, and coordinating the information it receives from the <Link slug="Sensory_nervous_system" title="sense organs" />, and making decisions as to the instructions sent to the rest of the body. The brain is contained in, and protected by, the <Link slug="Neurocanium" title="skull bones" /> of the <Link slug="Human_head" title="head" />.<br /><br />The cerebrum is connected by the brainstem to the spinal cord. The brainstem consists of the midbrain, the pons, and the medulla oblongata. The cerebellum is connected to the brainstem by three pairs of nerve tracts called cerebellar peduncles. Within the cerebrum is the ventricular system, consisting of four interconnected ventricles in which cerebrospinal fluid is produced and circulated. Underneath the cerebral cortex are several important structures, including the thalamus, the epithalamus, the <Link slug="Pineal_gland" title="pineal gland" />, the hypothalamus, the <Link slug="Pituitary_gland" title="pituitary_gland" />, and the subthalamus; the limbic structures, including the <Link slug="Amygdalae" title="amygdalae" /> and the hippocampi, the claustrum, the various <Link slug="Nucleus_(neuroanatomy)" title="nuclei" /> of the basal ganglia, the basal forebrain structures, and the three circumventricular organs. Brain structures that are not on the midplane exist in pairs, for example, there are two hippocampi and two amygdalae. The <Link slug="Brain_cell" title=" cells of the brain" /> include <Link slug="Neuron" title="neurons" /> and supportive glial cells. There are more than 86 billion neurons in the brain, and a more or less equal number of other cells. Brain activity is made possible by the interconnections of neurons and their release of <Link slug="Neurotransmitter" title="neurotransmitters" /> in response to nerve impulses. Neurons connect to form neural pathways, <Link slug="Neural_circuit" title="neural circuits" />, and elaborate network systems. The whole circuitry is driven by the process of <Link slug="Neurotransmission" title="neurotransmission" />.
            </p>
        </>
    );

    return (
        <Layout topic="Nervous System Organ" title="Human Brain" thumbnail="/assets/human_brain.png" content={content} />
    );
};