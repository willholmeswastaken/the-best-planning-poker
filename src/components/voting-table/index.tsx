import React from 'react'
import { IPlayer } from '../../models/IPlayer'
import { VotingTablePlayer } from '../voting-table-player'

interface VotingTableProps {
    participants?: Array<IPlayer>;
}

export const VotingTable = (props: VotingTableProps) => {
    return (
        <div>
            <div className="flex flex-col">
                <div>

                </div>
                <div className="w-80 h-36 rounded-xl bg-tbpp-purple">

                </div>
                <div>
                    {
                        props.participants &&
                        props.participants.map(player => (
                            <VotingTablePlayer key={player.name} vote={player.currentVoteValue} name={player.name} isLeader={player.isLeader} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
