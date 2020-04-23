import { createSelector } from 'reselect'

const selectDirectory = state => state.directory;

export const selectDirectirySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);