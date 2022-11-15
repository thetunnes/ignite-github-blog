import moment from "moment";
import "moment/dist/locale/pt-br.js";

export function formatDate(dateString: string) {

  const date = new Date(dateString)
  moment.updateLocale('pt-br', {
    relativeTime: {
      s: '1 segundo',
      m: '1 minuto',
      d: '1 dia',
      M: '1 mês',
      y: '1 ano'
    }
  })

  return moment(date).fromNow()
}