import { ResponseError } from "@/api/ApiAction.ts";

export default function PageErrorBuilder(
  error: ResponseError,
  subject: string = "Ressource",
) {
  let message: string | undefined = undefined;

  if (error.isApiUnavailable) {
    message =
      "La ressource est indisponible à l'heure actuelle. Veuillez réessayer ultérieurement.";
  } else {
    switch (error.status) {
      case 404:
        message = `${subject} non trouvé(e).`;
        break;
      default:
        break;
    }
  }

  return { message };
}
