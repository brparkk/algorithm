function solution(participant, completion) {
  const set = new Set(participant);
  const Participants = [...set];

  if (Participants.length === completion.length) {
    return participant
      .filter((person, idx) => participant.indexOf(person) !== idx)
      .toString();
  } else {
    return participant
      .filter((person) => !completion.includes(person))
      .toString();
  }
}
