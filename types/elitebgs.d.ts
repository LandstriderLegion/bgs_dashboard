interface Factions {
    docs: {
        _id: string,
        name_lower: string,
        __v: number,
        allegiance: string,
        government: string,
        name: string,
        eddb_id: null,
        faction_presence: FactionPresence[],
        government: string,
        name: string,
        name_lower: string,
        updated_at: string
    }[],
    total: number,
    limit: number,
    page: number,
    pages: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: null,
    nextPage: null
}

interface FactionPresence {
    system_name: string,
    system_name_lower: string,
    system_id: string,
    state: string,
    influence: number,
    happiness: string,
    active_states: {
        state: string,
    }[] | [],
    pending_states: {
        state: string,
        trend?: number
    }[] | [],
    recovering_states: {
        state: string,
        trend?: number
    }[] | [],
    conflicts: {
        type: string,
        status: string,
        opponent_name: string,
        opponent_name_lower: string,
        opponent_faction_id: string,
        station_id: string,
        stake: string,
        stake_lower: string,
        days_won: number
    }[] | [],
    updated_at: string,
}