import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'jose',
        sobrenome: 'Gabriel',
        email: 'gabriel@gmail.com',
        idade: 112,
        peso: 300,
        altura: 2.5,
      });

      return res.json(novoAluno);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        error: 'Erro ao criar aluno',
      });
    }
  }
}

export default new HomeController();
