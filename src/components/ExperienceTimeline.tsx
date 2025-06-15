'use client';
import Image from 'next/image';
import { sortedExperiences, Role, calculateDuration } from '@/data/experience';

const RoleCard = ({ role, isLast }: { role: Role, isLast: boolean }) => (
    <div className="relative flex items-start">
        <div className="flex-shrink-0 w-8 flex justify-center">
            <div className="h-3 w-3 rounded-full bg-stone-400 dark:bg-stone-500 mt-1.5"></div>
        </div>
        <div className="ml-4 pb-12 w-full">
            <h4 className="text-lg font-semibold text-stone-900 dark:text-white">{role.title}</h4>
            <div className="text-sm text-stone-600 dark:text-stone-400">
                <span>{new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(role.startDate)} - {role.isCurrent ? 'Present' : new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(role.endDate)}</span>
                <span className="mx-1">&middot;</span>
                <span>{calculateDuration(role.startDate, role.endDate, role.isCurrent)}</span>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-500">{role.type}</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-stone-700 dark:text-stone-300 text-sm sm:text-base">
                {role.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </div>
    </div>
);


export const ExperienceTimeline = () => {
    return (
        <div className="space-y-12">
            {sortedExperiences.map((companyExp, index) => (
                <div key={index} className="flex gap-x-4">
                    <div className="relative flex h-16 w-16 flex-none items-center justify-center bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2">
                        <Image src={companyExp.logoUrl} alt={`${companyExp.company} logo`} layout="fill" objectFit="contain" />
                    </div>
                    <div className="flex-auto">
                        <h3 className="text-xl font-semibold leading-6 text-stone-900 dark:text-white">{companyExp.company}</h3>
                        <p className="text-sm text-stone-600 dark:text-stone-500 mb-4">{companyExp.location}</p>
                        
                        <div className="relative">
                            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-stone-200 dark:bg-stone-700"></div>
                            <div>
                                {companyExp.roles.map((role, roleIndex) => (
                                    <RoleCard key={roleIndex} role={role} isLast={roleIndex === companyExp.roles.length - 1} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};