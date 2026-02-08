function status(request, response) {
  response.status(200).json({ mensagem: "Vou me casar com a Leticia Taguchi" });
}

export default status;
