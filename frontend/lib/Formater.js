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
  if (!data) return [];
  return data.map(item => {
    const { id, title, content, acf, date } = item;
    const { act, club, ticket, start, open, tickettype, ticketsource, contact, detail } = acf;
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
    }
  })
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
