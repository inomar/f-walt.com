export const newsFormater = (data) => {
  const { id, title, content, date } = data;
  return {
    id,
    title: title.rendered,
    body: content.rendered,
    date: date,
  };
};

export const liveFormater = (data) => {
  const { id, title, content, acf, date } = data;
  const { description, act, club, ticket, start, open, tickettype, ticketsource, contact, detail, image } = acf;
  return {
    id,
    title: title.rendered,
    body: content.rendered,
    description,
    club,
    act,
    ticket,
    start,
    open,
    date,
    ticketType: tickettype,
    ticketSource: ticketsource,
    contact,
    detail,
    image,
  };
};

export const videoFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { videoid } = item.acf;
    return {
      videoId: videoid,
    }
  })
};
