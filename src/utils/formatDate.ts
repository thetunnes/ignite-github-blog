import moment from "moment";
import "moment/dist/locale/pt-br.js";

export function formatDate(dateString: string) {

  const date = new Date(dateString)
  moment.updateLocale('pt-br', {
    relativeTime: {
      s: '1 segundo',
      d: '1 dia',
      m: '1 mês',
      y: '1 ano'
    }
  })

  return moment(date).fromNow()
}