router.post('/', async (req, res) => {
    const { nome, funcao, telefone, status } = req.body;
    const novoColaborador = new Colaborador({ nome, funcao, telefone, status });
  
    try {
      const colaboradorSalvo = await novoColaborador.save();
      res.status(201).json(colaboradorSalvo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  