"use client";
import React from "react";
import { ArticleSkeletonLoaderUtility } from "./utils/ArticleSkeletonLoaderUtility";

export function ArticleSkeletonLoader() {
    return (
        <ArticleSkeletonLoaderUtility className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                <div className="mb-10">
                    <div className="rounded-full w-fit px-4 py-1 mb-4 bg-gray-400 animate-pulse">
                    </div>

                    <div className="py-1 mb-4 bg-gray-400 animate-pulse">
                    </div>

                    <div className="bg-gray-400 animate-pulse px-[100] py-40">
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                        <div className="animate-pulse mb-3 py-1 px-10 bg-gray-400"></div>
                    </div>
                </div>
            </div>
        </ArticleSkeletonLoaderUtility>
    );
};