//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TALLY_HEADER = "Team                           | MP |  W |  D |  L |  P"

export const tournamentTally = (inputLines) => {
  const stats = calculateStats(inputLines.split("\n"));
  const linesToPrint = getLinesToPrint(stats);

  return `${TALLY_HEADER}\n${linesToPrint.join("\n")}`.trim();
};

const calculateStats = (input) => {
  const stats = input
    .reduce((stats, line) => {
      const [teamA, teamB, result] = line.split(";");

      switch (result) {
        case "win": {
          updateWin(stats, teamA);
          updateLoss(stats, teamB);

          break
        }
        case "draw": {
          updateDraw(stats, teamA);
          updateDraw(stats, teamB);

          break
        }
        case "loss": {
          updateWin(stats, teamB);
          updateLoss(stats, teamA);

          break
        }
      }

      return stats;
    }, {});

  return stats;
};

const getLinesToPrint = (stats) => {
  const statEntries = Object.entries(stats);
  const sortedEntries = statEntries.toSorted(
    (
      [teamA, {points: teamAPoints}],
      [teamB, {points: teamBPoints}]
    ) => (
      teamBPoints - teamAPoints || teamA.localeCompare(teamB)
    )
  );

  return sortedEntries
    .map(
      ([team, stats]) => {
        const matchesPlayed = `${stats.wins + stats.draws + stats.losses}`;
        const teamString = team.padEnd(30);
        const matchesString = matchesPlayed.padStart(2);
        const winsString = `${stats.wins}`.padStart(2);
        const drawsString = `${stats.draws}`.padStart(2);
        const lossesString = `${stats.losses}`.padStart(2);
        const pointsString = `${stats.points}`.padStart(2);
  
        return [
          teamString,
          matchesString,
          winsString,
          drawsString,
          lossesString,
          pointsString
        ].join(" | ");
      }
    );
};

const updateWin = (stats, winner) => {
  if (!stats[winner]) {
    stats[winner] = mergeInit({ wins: 1, matchesPlayed: 1, points: 3 });
  } else {
    stats[winner].wins += 1;
    stats[winner].matchesPlayed += 1;
    stats[winner].points += 3;
  }
};

const updateLoss = (stats, loser) => {
  if (!stats[loser]) {
    stats[loser] = mergeInit({ losses: 1, matchesPlayed: 1 });
  } else {
    stats[loser].losses += 1;
    stats[loser].matchesPlayed += 1;
  }
};

const updateDraw = (stats, team) => {
  if (!stats[team]) {
    stats[team] = mergeInit({ draws: 1, matchesPlayed: 1, points: 1 });
  } else {
    stats[team].draws += 1;
    stats[team].matchesPlayed += 1;
    stats[team].points += 1;
  }
};

const mergeInit = (statsOverrides = {}) => {
  const defaultStats = {
    wins: 0, 
    losses: 0, 
    draws: 0, 
    matchesPlayed: 0,
    points: 0
  };
  
  return {
    ...defaultStats, 
    ...statsOverrides
  };
};