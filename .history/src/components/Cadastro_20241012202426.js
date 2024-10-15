<Form onSubmit={handleSubmit}>
  {/* Seletor do tipo de cadastro */}
  <Form.Group className="mb-3">
    <Form.Label>Tipo de Cadastro</Form.Label>
    <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)}>
      <option value="">Selecione</option>
      <option value="colaborador">Colaborador</option>
      <option value="cliente">Cliente</option>
      <option value="equipamento">Equipamento</option>
      <option value="status">Status</option>
      <option value="usuario">Usuário (Acesso ao Sistema)</option>
    </Form.Select>
  </Form.Group>

  {/* Formulário para colaboradores */}
  {userType === 'colaborador' && (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          placeholder="Digite o nome"
          value={formData.nome || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Função</Form.Label>
        <Form.Control
          type="text"
          name="funcao"
          placeholder="Digite a função"
          value={formData.funcao || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="tel"
          name="telefone"
          placeholder="Digite o telefone"
          value={formData.telefone || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  )}

  {/* Formulário para clientes */}
  {userType === 'cliente' && (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome do Cliente</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          placeholder="Digite o nome do cliente"
          value={formData.nome || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          type="text"
          name="endereco"
          placeholder="Digite o endereço"
          value={formData.endereco || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          name="latitude"
          placeholder="Digite a latitude"
          value={formData.latitude || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          name="longitude"
          placeholder="Digite a longitude"
          value={formData.longitude || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  )}

  {/* Formulário para equipamentos */}
  {userType === 'equipamento' && (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome do Equipamento</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          placeholder="Digite o nome do equipamento"
          value={formData.nome || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Número da Frota</Form.Label>
        <Form.Control
          type="text"
          name="numeroFrota"
          placeholder="Digite o número da frota"
          value={formData.numeroFrota || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Marca</Form.Label>
        <Form.Control
          type="text"
          name="marca"
          placeholder="Digite a marca do equipamento"
          value={formData.marca || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tipo de Equipamento</Form.Label>
        <Form.Control
          type="text"
          name="tipoEquipamento"
          placeholder="Digite o tipo do equipamento"
          value={formData.tipoEquipamento || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>KM</Form.Label>
        <Form.Control
          type="text"
          name="km"
          placeholder="Digite a quilometragem"
          value={formData.km || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Horímetro</Form.Label>
        <Form.Control
          type="text"
          name="horimetro"
          placeholder="Digite o horímetro"
          value={formData.horimetro || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status Operacional</Form.Label>
        <Form.Control
          type="text"
          name="statusOperacional"
          placeholder="Digite o status operacional"
          value={formData.statusOperacional || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  )}

  {/* Formulário para status */}
  {userType === 'status' && (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Status Operacional</Form.Label>
        <Form.Control
          type="text"
          name="status"
          placeholder="Digite o status operacional"
          value={formData.status || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  )}

  {/* Formulário para usuários */}
  {userType === 'usuario' && (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          placeholder="Digite o nome"
          value={formData.nome || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Digite o e-mail"
          value={formData.email || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          name="senha"
          placeholder="Digite a senha"
          value={formData.senha || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  )}

  <Button variant="dark" type="submit" className="w-100">
    {editId ? 'Atualizar' : 'Salvar'}
  </Button>
</Form>
