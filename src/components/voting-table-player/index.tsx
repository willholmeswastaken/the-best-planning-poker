import React from 'react'
import { VotingCard } from '../voting-card'

interface VotingTablePlayerProps {
    vote?: string;
    name: string;
    isLeader: boolean;
}

export const VotingTablePlayer = (props: VotingTablePlayerProps) => {
    return (
        <div>
            <div className="w-10">
                <VotingCard value={props.vote ?? '?'} />
                <p className="text-sm font-semibold text-center">{props.name}</p>
            </div>
        </div>
    )
}
