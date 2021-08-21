import React from 'react'
import { Header } from '../../components/header'
import { VotingCard } from '../../components/voting-card'
import { VotingTable } from '../../components/voting-table'

interface Props {

}

export const ViewRoomPage = (props: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow items-center justify-center">
                <div className="flex flex-col">
                    <p className="text-sm text-center mb-10">Invite players!</p>
                    <VotingTable participants={undefined} />
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    <div>
                        <p className="text-sm">Choose your card</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <VotingCard value="1" />
                        <VotingCard value="2" />
                        <VotingCard value="3" />
                        <VotingCard value="5" />
                        <VotingCard value="8" />
                        <VotingCard value="13" />
                        <VotingCard value="?" />
                    </div>
                </div>
            </div>
        </div>
    )
}
