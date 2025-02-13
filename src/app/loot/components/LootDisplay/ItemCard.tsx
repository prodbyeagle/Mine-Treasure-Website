import Image from 'next/image';
import { Info } from 'lucide-react';
import type { ItemCardProps } from '@/types/types';
import { getBlockRangeText, hasModalData } from '../../utils/itemUtils';

export default function ItemCard({ item, getItemImage, onClick }: ItemCardProps) {
    const showModal = hasModalData(item);
    const blockRange = getBlockRangeText(item);

    return (
        <div
            onClick={() => showModal ? onClick() : null}
            className={`flex items-center transition-all duration-300 gap-3 p-2 rounded-lg border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800 ${showModal ? 'hover:bg-zinc-50 dark:hover:bg-zinc-600/50 cursor-pointer' : ''
                }`}
        >
            <div className="bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-md">
                <Image
                    src={getItemImage(item) || '/missing_texture_block.png'}
                    alt={item.name || item.type}
                    width={24}
                    height={24}
                    className="pixelated"
                    unoptimized
                />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                    {item.name || item.type.replace(/_/g, ' ')}
                </p>
                {blockRange && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        {blockRange}
                    </p>
                )}
            </div>
            {(item.chances && Object.keys(item.chances[0]).length > 1 || showModal) && (
                <Info className='w-4 h-4 text-zinc-400 flex-shrink-0' />
            )}
        </div>
    );
}
