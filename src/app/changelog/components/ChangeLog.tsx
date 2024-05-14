"use client";

import { SparklesText } from "@/components/Sparkles";
import { changelogData } from "@/data/changelogData";
export default function ChangeLogComponent() {
    return (
        <>
            <SparklesText>CHANGELOG</SparklesText>
            <div className="pb-24">
                <div className="max-w-xl mx-auto p-8">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {changelogData.logs.map((log, i) => (
                                <li key={i}>
                                    <div className="relative pb-8">
                                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5" aria-hidden="true"></span>
                                        <div className="relative flex items-start space-x-3">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-0">
                                                <div className="text-md">
                                                    <div className="pb-[-5px]">
                                                        <span className="font-medium text-lg mr-2">{log.title}</span>
                                                        <span onClick={() => window.open("https://github.com/devsujay19/knowledgebase/commits/main")} className="cursor-pointer my-0.5 relative inline-flex items-center rounded-full border text-neutral-500 transition border-neutral-500 hover:border-neutral-200 hover:text-neutral-200 px-3 py-0.5 text-sm">
                                                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                            </div>
                                                            <div className="font-medium">{log.type}</div>
                                                        </span>
                                                    </div>
                                                    <span className="whitespace-nowrap text-[10px]">{log.date}</span>
                                                </div>
                                                <div className="mt-2">
                                                    <p dangerouslySetInnerHTML={{ __html: log.updates }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};