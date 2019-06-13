export const newsFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { id, title, content, date } = item;
    return {
      id,
      title: title.rendered,
      body: content.rendered,
      date: date,
    }
  })
};

export const liveFormater = (data) => {
  console.log(data)
  const { id, title, content, acf, date } = data;
  const { act, club, ticket, start, open, tickettype, ticketsource, contact, detail, image } = acf;
  return {
    id,
    title: title.rendered,
    body: content.rendered,
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
  }
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
