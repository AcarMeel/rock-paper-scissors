import { GetState, create } from 'zustand'

export interface IGame {
    option: string,
    beats: string
}

export interface IStore {
    gameName: string,
    gameOptions: Array<IGame>,
    score: number,
    userSelection: string,
    hostSelection: string,
    playAgain: boolean,
    userWins: boolean,
    isATie: boolean,
    openDialog: boolean,
    setUserSelection: Function,
    setHostSelection: Function,
    increaseScore: Function,
    resetScore: Function,
    setWinner: Function,
    togglePlayAgain: Function,
    setUserWins: Function,
    setIsATie: Function,
    setOpenDialog: Function
}

export const useGameStore = create((set, get: GetState<IStore>) => ({
    gameName: 'Rock Paper Scissors',
    gameOptions: [{
        option: 'paper', beats: 'rock'
    }, {
        option: 'rock', beats: 'scissors'
    }, {
        option: 'scissors', beats: 'paper'
    }],
    score: 0,
    userSelection: '',
    hostSelection: '',
    playAgain: true,
    userWins: false,
    isATie: false,
    openDialog: false,
    increaseScore: () => set((state: IStore) => ({ score: state.score + 1 })),
    resetScore: () => set({ score: 0 }),
    setUserSelection: (selection: string) => {
        set({ userSelection: selection })
    },
    setHostSelection: (selection: string) => {
        set({ hostSelection: selection })
    },
    setIsATie: (selection: boolean) => {
        set({ isATie: selection })
    },
    setWinner: () => {
        let userWinsGame = false;
        let isATie = false;
        const findUserGame = get().gameOptions.find(option => option.option === get().userSelection);
        const findHostGame = get().gameOptions.find(option => option.option === get().hostSelection);
        if (findUserGame?.option !== findHostGame?.option) {
            if (findUserGame?.beats === findHostGame?.option) {
                console.log('increase score')
                get().increaseScore();
                userWinsGame = true;
            }
        } else {
            isATie = true;
        }
        get().setIsATie(isATie);
        get().setUserWins( userWinsGame );
    },
    togglePlayAgain: () => set((state: IStore) => ({ playAgain: !state.playAgain })),
    setUserWins: (userWins: boolean) => set({ userWins: userWins }),
    setOpenDialog: () => set((state: IStore) => ({ openDialog: !state.openDialog })),
}))