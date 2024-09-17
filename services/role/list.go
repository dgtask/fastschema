package roleservice

import (
	"github.com/fastschema/fastschema/db"
	"github.com/fastschema/fastschema/fs"
)

func (rs *RoleService) List(c fs.Context, _ any) ([]*fs.Role, error) {
	return db.Builder[*fs.Role](rs.DB()).Get(c)
}
